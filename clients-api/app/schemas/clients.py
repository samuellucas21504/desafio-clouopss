def clientEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "name": item["name"],
        "email": item["email"],
        "cellphone": item["cellphone"],
        "address": item["address"],
        "profession": item["profession"],
        # "curriculum": item["curriculum"],
    }


def clientsEntity(entity) -> list:
    return [clientEntity(item) for item in entity]
