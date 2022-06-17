import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Client(props) {
	return (
		<div className="client">
			<div className="client--name">
				<h1>{props.name}</h1>
			</div>
			<div className="client--contact_information">
				<p>Email: {props.email}</p>
				<p>Telefone: {props.cellphone}</p>
			</div>
			<div className="client--contact_information">
				<p>Endereço: {props.address}</p>
				<p>Profissão: {props.profession}</p>
			</div>
			<div className="client--buttons">
				<button
					className="client--delete"
					onClick={props.handleDelete}
					name={props.id}
				>
					Deletar
				</button>

				<Link
					to={"/updateCadastro"}
					state={{
						name: props.name,
						email: props.email,
						cellphone: props.cellphone,
						address: props.address,
						profession: props.profession,
						id: props.id,
					}}
					className="client--update_link"
				>
					<button className="client--update">Update</button>
				</Link>
			</div>
		</div>
	);
}
