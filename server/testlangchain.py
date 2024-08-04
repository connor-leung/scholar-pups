from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

uri = os.environ.get('MONGO_URI')

def get_scholarship_details(id):
    client = MongoClient(uri)
    db = client["scholar_pups"]
    collection = db["scholarships"]
    scholarship = collection.find_one({"id": id})
    description = scholarship['Description']
    return description

template = """Question: Can you provide specific instructions on my English delivery to further improve my application relative to the prompt of the application.

Scholarship Details: {scholarship_details}

Currently have the following content in the application: {application_content}

Answer: Please provide suggestions to improve the content of the application given in the question and scholarship details."""



def get_suggestions(application, id):
    scholarship = get_scholarship_details(id)
    if not scholarship:
        return "Scholarship not found."
    prompt = ChatPromptTemplate.from_template(template)
    model = OllamaLLM(model="llama3.1")
    chain = prompt | model
    result = chain.invoke({
        "scholarship_details": scholarship,
        "application_content": application
    })
    return result

# Example usage
# example_application = "Why I Should Be Selected as an ABLE Scholarship Recipient As a dedicated student of social work at the University of Toronto, I am deeply committed to making a meaningful impact in the justice sector. My passion for social justice and community development has driven my academic and professional journey. I believe that the ABLE scholarship will enable me to further my education and enhance my ability to serve my community effectively. Why I Have Selected My Field of Study and My Intended Contributions to the Community and/or Justice Sector I chose to pursue a degree in social work because I believe in the power of community and the importance of supporting vulnerable populations. Growing up in a marginalized community, I witnessed firsthand the challenges faced by racialized individuals, particularly Black youth. These experiences fueled my desire to work in the social work field, where I can advocate for systemic change and provide direct support to those in need. My goal is to work in a role that bridges the gap between social work and law enforcement, promoting community-based approaches to justice. By collaborating with local law enforcement agencies, I aim to develop and implement programs that address the root causes of crime and support rehabilitation and reintegration efforts. I am particularly interested in initiatives that focus on youth engagement and crime prevention, as I believe that early intervention is key to creating safer and more inclusive communities. Anything Else You Would Like the Selection Committee to Know In addition to my academic and professional pursuits, I am actively involved in various community organizations. As a volunteer with the Black Youth Helpline, I provide crisis intervention and support for Black youth, helping them navigate challenges and access necessary resources. My role as a mentor with Big Brothers Big Sisters of Toronto has also allowed me to guide at-risk youth, fostering their personal and educational development. Receiving the ABLE scholarship would not only support my educational goals but also empower me to continue my work in the community. I am committed to honoring the legacy of Rose Fortune and Peter C. Butler III by contributing to a justice sector that is reflective of and responsive to all Canadians."
# print(get_suggestions(example_application, 0))
