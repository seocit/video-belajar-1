import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import "@mantine/core/styles.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { MantineProvider } from "@mantine/core";

const App: React.FC = () => {
	return (
		<MantineProvider>
			<Navbar />
			<Routes>
				<Route index element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/homepage" element={<HomePage />} />
			</Routes>
		</MantineProvider>
	);
};

export default App;
