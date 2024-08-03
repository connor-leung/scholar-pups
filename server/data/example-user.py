from pymongo import MongoClient
from dotenv import load_dotenv
import gridfs
import os

load_dotenv()

uri = os.environ.get('MONGO_URI')

# Step 1: Install gridfs
# pip install pymongo

# Step 2: Connect to MongoDB
client = MongoClient(uri)  # Adjust the URI as needed
db = client['scholar_pups']  # Replace with your database name

# Step 3: Upload File to GridFS
fs = gridfs.GridFS(db)
with open('data/Jordan_Matthews_Resume.pdf', 'rb') as f:
    file_id = fs.put(f, filename='Jordan_Matthews_Resume.pdf')

# Step 4: JSON Document with File Reference
json_document = {
    "'id'": 0,
    "name": "Jordan Matthews",
    "gender": "Female",
    "race": "Black",
    "resume": file_id  # Store the GridFS file ID
}

# Step 5: Insert Document
collection = db['user']  # Replace with your collection name
collection.insert_one(json_document)

print("Document and file inserted successfully")