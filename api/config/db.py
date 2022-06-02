from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env")

client = MongoClient(config.get("DATABASE_CONNECTION_URL"))

db = client.test

collection_name = db["Users"]

