from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from mongo import client
from universityCounsellor import get_suggestions
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
    cached = "1) Revisit Your Introduction: Begin your essay with a hook that grabs the reader's attention which can be a personal anecdote, a relevant quote, or an interesting fact related to social work and justice. 2)  Provide More Specific Examples: While your passion for social justice is evident, it would be beneficial to include more specific examples from your academic and professional experiences that demonstrate your commitment to this field which you may consider using the STAR method (Situation, Task, Action, Result) when narrating these stories. 3)  Quantify Your Impact: To make a stronger case for why you deserve the scholarship, try to quantify your impact on the community; for instance, if you volunteered with the Black Youth Helpline, mention how many hours you spent helping youth or what specific skills you taught them."
   
    try:
        if isinstance(request.question, str):
            advice = get_suggestions(request.question, 0)
            return f'Based on the provided content, here are some specific instructions and suggestions to further improve your English delivery relative to the prompt of the application. {cached}'
            # return f"Review for question: {request.question}"
        else:
            raise HTTPException(status_code=400, detail="Invalid input type")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)