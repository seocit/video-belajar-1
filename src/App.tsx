import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import "@mantine/core/styles.css";
import Navbar from "./components/Navbar";
import { MantineProvider } from "@mantine/core";

const App: React.FC = () => {
	return (
		<MantineProvider>
			<Navbar />
			<Outlet />
		</MantineProvider>
	);
};

export default App;
