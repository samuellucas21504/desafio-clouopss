import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import blob from "../../images/blob.svg";
import "./styles.css";

export default function UpdateClients(props) {
	const location = useLocation();
	const [clientsData, setClientsData] = useState({ ...location.state });
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const { id } = clientsData;
		const newClientsData = { ...clientsData };
		delete newClientsData.id;
		axios
			.put(`http://localhost:8000/clients/${id}`, {
				...newClientsData,
			})
			.then((response) => {
				if (response.status === 200) {
					window.alert("Dados atualizados com sucesso!");
					navigate("/cadastrados");
				}
			})
			.catch((error) => console.log(error));
	}
	function handleChange(e) {
		const { name, value } = e.target;
		setClientsData((prevClientsData) => ({
			...prevClientsData,
			[name]: value,
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="updateClient--blob_wrapper">
				<img className="updateClient--blob" src={blob} />
			</div>
			<div className="updateClientData">
				<p>
					<label htmlFor="client">Nome:</label>
					<input
						id="client"
						type="text"
						name="name"
						onChange={handleChange}
						value={clientsData.name}
					></input>
				</p>
				<p>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={handleChange}
						value={clientsData.email}
					></input>
				</p>
				<p>
					<label htmlFor="cellphone">Telefone:</label>
					<input
						id="cellphone"
						type="tel"
						name="cellphone"
						onChange={handleChange}
						value={clientsData.cellphone}
					></input>
				</p>
				<p>
					<label htmlFor="address">Endereço:</label>
					<input
						id="address"
						type="text"
						name="address"
						onChange={handleChange}
						value={clientsData.address}
					></input>
				</p>
				<p>
					<label htmlFor="profession">Profissão:</label>
					<input
						id="profession"
						type="text"
						name="profession"
						onChange={handleChange}
						value={clientsData.profession}
					></input>
				</p>
			</div>

			<div className="updateClient--submit">
				<button type="submit" className="updateClient--submit_button">
					Enviar
				</button>
			</div>
		</form>
	);
}
