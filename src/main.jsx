import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "@/components/ui/sonner";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Toaster richColors position="bottom-center" />
		<App />
	</>,
);