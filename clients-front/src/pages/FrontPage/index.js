import React from "react";
import "./styles.css";

export default function FrontPage() {
	return (
		<div className="frontPage">
			<div className="frontPage--content">
				<h1 className="frontPage--title">
					Se você chegou até aqui é um bom sinal!
				</h1>
				<p>
					O front-end foi todo desenvolvido em{" "}
					<span className="enfase react">React!</span>
				</p>
				<p>
					O back-end foi desenvolvido em python usando a{" "}
					<span className="fastapi">FastAPI</span> e integrando com o
					banco de dados <span className="mongo">mongoDB.</span>
				</p>
				<p>
					Para entrar na documentação do backend{" "}
					<a href="http://localhost:8000/docs">clique aqui.</a>
				</p>
				<p>
					Para cadastrar um novo cliente, clique em cadastrar na barra
					de navegação acima.
				</p>
				<p>
					Para ver os clientes cadastrados, clique em cadastrados na
					barra de navegação acima ou vá para a documentação do
					backend.
				</p>
			</div>
			<div className="frontPage--checkList">
				<h1 className="frontPage--title">
					O que foi pedido e feito no projeto:
				</h1>
				<h2>
					Criar uma API Rest com Python{" "}
					<i class="fa-solid fa-check verde" />
				</h2>
				<ul>
					<li>
						Suporte GET, POST, DELETE, UPDDATE{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Gere logs com nível 1, 2, 3, 4, 5{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Suporte banco de dados nosql{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Tenha documentação declarada através de um
						endpoint(podendo ser Swagger){" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
				</ul>
				<h2>
					Criar uma interface FrontEnd{" "}
					<i class="fa-solid fa-check verde"></i>
				</h2>
				<ul>
					<li>
						Botão novo cadastro{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Nome <i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Email <i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Telefone <i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Endereço completo{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Profissão <i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Upload de Currículo{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Botão para Limpar{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Botão para Enviar{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						PopUp de envio com sucesso{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
				</ul>
				<h2>Seria bom se...</h2>
				<ul>
					<li>
						Automação para gerar imagem da API no docker{" "}
						<i class="fa-solid fa-check verde"></i>
					</li>
					<li>
						Teste de capacidade{" "}
						<i class="fa-solid fa-x vermelho"></i>
					</li>
					<li>
						Teste Unitário <i class="fa-solid fa-x vermelho"></i>
					</li>
				</ul>
				<h2>
					Seguir circuito de desenvolvimento{" "}
					<i class="fa-solid fa-check verde"></i>
				</h2>
				<h2>
					Entregar o projeto com repositório do github com README{" "}
					<i class="fa-solid fa-check verde"></i>
				</h2>
			</div>
		</div>
	);
}
