from fastapi import APIRouter

from models.user import User
from config.db import collection_name
from schemas.user import user_serializer, users_serializer
from bson import ObjectId

api_router = APIRouter()

@api_router.get('/')
async def find_all_users():
    users = users_serializer(collection_name.find())
    return users

@api_router.post('/')
async def create_user(user: User):
    _id = collection_name.insert_one(dict(user))
    return users_serializer(collection_name.find({"_id": _id.inserted_id}))

@api_router.put('/{id}')
async def update_user(id, user: User):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {
        "$set": dict(user)
    })
    return users_serializer(collection_name.find({"_id": ObjectId(id)}))

@api_router.delete('/{id}')
async def delete_user(id,user: User):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"status": "ok"}
