import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateClients from "../UpdateClients";
import Client from "./Client";
import "./styles.css";

const axios = require("axios").default;

export default function Clients() {
	const [changed, setChanged] = useState(1);
	const [clients, setClients] = useState([]);

	function handleDelete(e) {
		const { name } = e.target;
		axios
			.delete(`http://localhost:8000/clients/${name}`)
			.then((response) => {
				setChanged((changed) => changed + 1);
			})
			.catch((error) => console.log(error));
	}

	const clientsMapped = clients.map((client) => {
		return (
			<Client key={client.id} handleDelete={handleDelete} {...client} />
		);
	});

	useEffect(() => {
		axios.get("http://localhost:8000/clients").then((response) => {
			setClients(response.data);
		});
	}, [changed]);

	return <div className="clients">{clientsMapped}</div>;
}
