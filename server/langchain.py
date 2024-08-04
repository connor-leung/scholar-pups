from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

uri = os.environ.get('MONGO_URI')

def get_scholarship_details(scholarship_name):
    client = MongoClient(uri)
    db = client["scholarship_database"]
    collection = db["scholarships"]
    scholarship = collection.find_one({"scholarship_name": scholarship_name})
    return scholarship

template = """Question: Can you provide specific instructions on my English delivery to further improve my application relative to the prompt of the application. {question}

Scholarship Details: {scholarship_details}

Answer: Please provide suggestions to improve the content of the application given in the question and scholarship details."""

prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model="llama3.1")

def get_suggestions(question, scholarship_name):
    scholarship = get_scholarship_details(scholarship_name)
    if not scholarship:
        return "Scholarship not found."

    scholarship_details = f"""
    Name: {scholarship['scholarship_name']}
    Description: {scholarship['description']}
    Eligibility: {scholarship['eligibility_criteria']}
    Deadline: {scholarship['application_deadline']}
    Instructions: {scholarship['application_instructions']}
    Other Details: {scholarship['other_details']}
    """

    chain = prompt | model
    result = chain.invoke({
        "question": question,
        "scholarship_details": scholarship_details
    })
    return result

# Example usage
question = "I am applying for the Example Scholarship and need to improve my essay."
scholarship_name = "Example Scholarship"
suggestions = get_suggestions(question, scholarship_name)
print(suggestions)
