def clientEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "name": item["name"],
        "email": item["email"],
        "cellphone": item["cellphone"],
        "address": item["address"],
        "profession": item["profession"],
        "image_uuid": item["image_uuid"],
    }


def clientsEntity(entity) -> list:
    return [clientEntity(item) for item in entity]
