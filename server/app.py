from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import Optional
from mongo import client
from fastapi.middleware.cors import CORSMiddleware
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

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, for development purposes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



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

class QuestionRequest(BaseModel):
    question: str

@app.post("/review")
async def review(request: QuestionRequest):
    try:
        # review = perform_review(question)
        # await asyncio.sleep(120)  # Delay for 2 seconds
        # return {"review": review}
        if isinstance(request.question, str):
            return f"Review for question: {request.question}"
        else:
            raise HTTPException(status_code=400, detail="Invalid input type")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)