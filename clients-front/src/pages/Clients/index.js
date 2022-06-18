import React, { useEffect, useState } from "react";
import Client from "./Client";
import "./styles.css";

const axios = require("axios").default;

export default function Clients() {
	const [changed, setChanged] = useState(1);
	const [clients, setClients] = useState([]);

	function handleDelete(e) {
		const { id } = e.target;
		axios
			.delete(`http://localhost:8000/clients/${id}`)
			.then((response) => {
				setChanged((changed) => changed + 1);
			})
			.catch((error) => console.log(error));
	}

	function handleDownload(e) {
		const { id } = e.target;
		axios({
			url: `http://localhost:8000/images/${id}`,
			method: "GET",
			responseType: "blob",
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "curriculo");
			document.body.appendChild(link);
			link.click();
		});
	}

	const clientsMapped = clients.map((client) => {
		return (
			<Client
				key={client.id}
				handleDelete={handleDelete}
				handleDownload={handleDownload}
				{...client}
			/>
		);
	});

	useEffect(() => {
		axios.get("http://localhost:8000/clients").then((response) => {
			setClients(response.data);
		});
	}, [changed]);

	return <div className="clients">{clientsMapped}</div>;
}
