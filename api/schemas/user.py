def user_serializer(user) -> dict:
    return {
        "id": str(user["_id"]),
        "nome":user["nome"],
        "email":user["email"],
        "tel":user["tel"],
        "endereco":user["endereco"],
        "profissao":user["profissao"],
    }

def users_serializer(users) -> list:
    return [user_serializer(user) for user in users]