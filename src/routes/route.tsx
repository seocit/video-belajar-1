import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductPage from "../pages/ProductPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Login /> },
			{ path: "register", element: <Register /> },
			{ path: "homepage", element: <HomePage /> },
			{ path: "video-collection", element: <ProductPage/> },
		],
	},
]);
