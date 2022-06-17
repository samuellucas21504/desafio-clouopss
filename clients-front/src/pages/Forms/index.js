import React, { useState } from "react";
import blob from "../../images/blob.svg";
import "./styles.css";

export default function Form() {
	const axios = require("axios").default;
	const cleanedForm = {
		client: "",
		email: "",
		cellphone: "",
		address: "",
		profession: "",
	};

	const [formsData, setFormsData] = useState(cleanedForm);
	const [changed, setChanged] = useState(false);

	function cleanForms() {
		setFormsData(cleanedForm);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormsData((prevFormsData) => ({
			...prevFormsData,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const clientData = {
			name: formsData.client,
			email: formsData.email,
			cellphone: formsData.cellphone,
			address: formsData.address,
			profession: formsData.profession,
		};

		console.log(clientData);

		axios
			.post("http://localhost:8000/clients", clientData)
			.then(function (response) {
				if (response.status === 201) {
					window.alert("Cadastro realizado com sucesso!");
					setFormsData((prevFormsData) => ({
						client: "",
						email: "",
						cellphone: "",
						address: "",
						profession: "",
					}));
				}
			})
			.catch(function (error) {
				window.alert("Algo deu errado! Tente novamente!");
			});
		setChanged(!changed);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form--blob_wrapper">
				<img className="form--blob" src={blob} />
			</div>
			<div className="formData">
				<p>
					<label htmlFor="client">Nome:</label>
					<input
						id="client"
						type="text"
						name="client"
						onChange={handleChange}
						value={formsData.client}
					></input>
				</p>
				<p>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={handleChange}
						pattern="/^([A-Za-z]|[0-9])+$/"
						value={formsData.email}
					></input>
				</p>
				<p>
					<label htmlFor="cellphone">Telefone:</label>
					<input
						id="cellphone"
						type="tel"
						name="cellphone"
						onChange={handleChange}
						pattern="/^\+[1-9]{1}[0-9]{3,14}$/"
						value={formsData.cellphone}
					></input>
				</p>
				<p>
					<label htmlFor="address">Endereço:</label>
					<input
						id="address"
						type="text"
						name="address"
						onChange={handleChange}
						value={formsData.address}
					></input>
				</p>
				<p>
					<label htmlFor="profession">Profissão:</label>
					<input
						id="profession"
						type="text"
						name="profession"
						onChange={handleChange}
						value={formsData.profession}
					></input>
				</p>
			</div>
			<div className="form--submit">
				<button
					type="button"
					className="form--button"
					onClick={cleanForms}
				>
					Limpar
				</button>
				<button className="form--button">Enviar</button>
			</div>
		</form>
	);
}
