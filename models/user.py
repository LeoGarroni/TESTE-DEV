import email
from ssl import SSLWantReadError
from pydantic import BaseModel

class User(BaseModel):
    nome: str
    email: str
    tel: str
    endereco: str
    profissao: str

