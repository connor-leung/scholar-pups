from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import Optional
from mongo import client
from pandas import pd
import uuid

class Scholarship(BaseModel):
    id: str
    ScholarshipName: str
    Value: float
    Requirements: str
    ApplicationPeriod: str
    Level: str
    HostCountry: str
    Link: str

db = client['scholar_pups'] 
scholarships_collection = db['scholarships']


app = FastAPI()


@app.post("/scholarships")
async def add_scholarship(scholarship: Scholarship):
    try:
        if not scholarship.id:
            scholarship.id = str(uuid.uuid4())
        result = scholarships_collection.insert_one(scholarship.dict())
        return {"message": "Scholarship added successfully", "id": scholarship.id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/scholarships")
async def get_scholarships(limit: int = Query(10, ge=1), skip: int = Query(0, ge=0)):
    try:
        scholarships = list(scholarships_collection.find({}, {"_id": 0}).skip(skip).limit(limit))
        return scholarships
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.post("/load_csv")
async def load_csv():
    try:
        # Read the CSV file
        csv_file_path = 'data/scholarship-database.csv'  # Replace with your CSV file path
        df = pd.read_csv(csv_file_path)

        # Convert the DataFrame to a list of dictionaries
        data = df.to_dict(orient='records')

        # Insert the data into the MongoDB collection
        result = scholarships_collection.insert_many(data)
        return {"message": f"Inserted {len(result.inserted_ids)} documents into the collection."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))