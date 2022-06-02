from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client.teste_dev

collection_name = db["Users"]
