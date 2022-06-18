import React from "react";
import Clients from "./pages/Clients";
import Forms from "./pages/Forms";
import "./styles/globalstyles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import UpdateClients from "./pages/UpdateClients";
import FrontPage from "./pages/FrontPage";

export default function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<FrontPage />} exact />
				<Route path="/cadastrados" element={<Clients />} />
				<Route path="/forms" element={<Forms />} />
				<Route path="/updateCadastro" element={<UpdateClients />} />
			</Routes>
		</div>
	);
}
