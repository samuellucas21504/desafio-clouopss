import uuid
from pydantic import BaseModel


class Client(BaseModel):
    name: str
    email: str
    cellphone: str
    address: str
    profession: str
    image_uuid: str
