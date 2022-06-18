import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
	return (
		<nav className="nav">
			<Link to="/" className="nav--logo">
				<i className="fa-solid fa-cloud fa-xl fa-beat" />
			</Link>
			<ul>
				<CustomLink to="/cadastrados">Cadastrados</CustomLink>
				<CustomLink to="/forms">Cadastrar</CustomLink>
			</ul>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
