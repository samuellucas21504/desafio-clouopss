from pydantic import BaseModel


class Client(BaseModel):
    name: str
    email: str
    cellphone: str
    address: str
    profession: str
    #curriculum: str
