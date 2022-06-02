from fastapi import FastAPI
from routes.user import api_router


app = FastAPI()
app.include_router(api_router)