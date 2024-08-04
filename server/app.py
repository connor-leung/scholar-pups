from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import Optional
from mongo import client
import uuid

class Scholarship(BaseModel):
    id: str
    ScholarshipName: str
    Value: float
    Requirements: str
    ApplicationPeriod: str
    Level: str
    Where: str
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
        scholarships = list(scholarships_collection.find({}, {"id": 0}).skip(skip).limit(limit))
        return scholarships
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/review")
async def get_review(scholarship_name: str, question: str):
    