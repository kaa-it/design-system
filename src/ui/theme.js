import { typography } from "./typography";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import "./fonts/inter.css";

export const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    body {
        background-color: ${(p) => getTheme(p).colors.background};
        font-family: "Inter", -apple-system, system-ui,BlinkMacSystemFont, "Helvetica Neue", sans-serif;
        color: ${(p) => getTheme(p).colors.textPrimary};
    }
`;

const darkColors = {
	background: "#101521",
	backgroundAlt: "#171D2D",
	primary: "#217BD8",
	secondary: "#2E3A59",
	primaryContent: "#FFFFFF",
	secondaryContent: "#FFFFFF",
	textPrimary: "#FFFFFF",
	textSecondary: "#878A92",
	textOverlay: "#FFFFFF",
	danger: "#FF6262"
};

const lightColors = {
	background: "#FFFFFF",
	backgroundAlt: "#F4F7FD",
	primary: "#217BD8",
	secondary: "#E0E4ED",
	primaryContent: "#FFFFFF",
	secondaryContent: "#2E3A59",
	textPrimary: "#2E3A59",
	textSecondary: "#828282",
	textOverlay: "#FFFFFF",
	danger: "#FF6262"
};

export const styledDarkTheme = {
	layout: {
		defaultSpacing: 4,
		borderRadius: "4px"
	},
	button: {
		primary: {
			color: darkColors.primaryContent,
			backgroundColor: darkColors.primary
		},
		secondary: {
			color: darkColors.secondaryContent,
			backgroundColor: darkColors.secondary
		}
	},
	colors: { ...darkColors },
	typography
};

export const styledLightTheme = {
	layout: {
		defaultSpacing: 4,
		borderRadius: "4px"
	},
	button: {
		primary: {
			color: lightColors.primaryContent,
			backgroundColor: lightColors.primary
		},
		secondary: {
			color: lightColors.secondaryContent,
			backgroundColor: lightColors.secondary
		}
	},
	colors: { ...lightColors },
	typography
};

export const getTheme = (props) => props.theme;
