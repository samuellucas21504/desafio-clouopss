import React, { useState } from "react";
import blob from "../../images/blob.svg";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
	const axios = require("axios").default;
	const cleanedForm = {
		client: "",
		email: "",
		cellphone: "",
		address: "",
		profession: "",
		image_uuid: uuidv4(),
	};

	const [formsData, setFormsData] = useState(cleanedForm);
	const [file, setFile] = useState(null);
	const [changed, setChanged] = useState(1);

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

	function handleImage(e) {
		const file = e.target.files[0];
		setFile(file);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const clientData = {
			name: formsData.client,
			email: formsData.email,
			cellphone: formsData.cellphone,
			address: formsData.address,
			profession: formsData.profession,
			image_uuid: formsData.image_uuid,
		};

		let data = new FormData();

		data.append("file", file);
		console.log(data);
		axios.post("http://localhost:8000/clients", clientData);
		axios
			.post(
				`http://localhost:8000/images/${formsData.image_uuid}`,
				data,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then((response) => {
				console.log(response);
				if (response.status === 201) {
					window.alert("Cadastro realizado com sucesso!");
					cleanForms();
				}
			});

		setChanged((changed) => changed + 1);
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
						required
					/>
				</p>
				<p>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={handleChange}
						value={formsData.email}
						required
					/>
				</p>
				<p>
					<label htmlFor="cellphone">Telefone:</label>
					<input
						id="cellphone"
						type="tel"
						name="cellphone"
						onChange={handleChange}
						value={formsData.cellphone}
						required
					/>
				</p>
				<p>
					<label htmlFor="address">Endereço:</label>
					<input
						id="address"
						type="text"
						name="address"
						onChange={handleChange}
						value={formsData.address}
						required
					/>
				</p>
				<p>
					<label htmlFor="profession">Profissão:</label>
					<input
						id="profession"
						type="text"
						name="profession"
						onChange={handleChange}
						value={formsData.profession}
						required
					/>
				</p>
				<p>
					<label htmlFor="image">Currículo:</label>
					<input
						id="image"
						type="file"
						name="image"
						onChange={handleImage}
						required
					/>
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
