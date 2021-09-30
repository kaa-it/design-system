import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import { styledDarkTheme, styledLightTheme, GlobalStyle } from "./ui/theme";
import App from "./App";

const rootElement = document.getElementById("root");

export const Context = createContext({
	current: "light",
	onThemeChange: () => {}
});

const Root = () => {
	const [current, setTheme] = useState("light");
	const onThemeChange = () => {
		setTheme(current === "light" ? "dark" : "light");
	};
	return (
		<Context.Provider value={{ current: "light", onThemeChange }}>
			<ThemeProvider
				theme={
					current === "light" ? styledLightTheme : styledDarkTheme
				}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</Context.Provider>
	);
};
ReactDOM.render(
	<StrictMode>
		<Root />
	</StrictMode>,
	rootElement
);
