# Desafio Cloudopss

Para a execução desse projeto é necessário ter instalado docker-compose.

Comandos para executar o programa:

`chmod +x run-app-deploy.sh`

`./run-app-deploy.sh`

Após a execução o frontEnd estará localizado na porta 3001 e o backend na porta 8000.

FrontEnd desenvolvido em React e backEnd desenvolvido em FastAPI com integração a mongoDB

## Atenção! Evitar de adicionar dados pelo endpoint de documentação, visto que o banco de dados imagens é dependente da chave do banco de dados clientes!
## Caso esteja com mongo ligado na máquina desligár-lo com sudo services mongod stop!


