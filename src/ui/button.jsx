import styled from "styled-components";
import { getTheme } from "./theme";
import { getBoxStyles } from "./box";

const buttonMixIn = (props) => {
  const { button } = getTheme(props);

  const primaryRules = `
		background-color: ${button.primary.backgroundColor};
		color: ${button.primary.color};
		&:hover {
			background-color: ${button.primary.backgroundColor};
			color:  ${button.primary.color};
		}
		&:focus {
			background-color: ${button.primary.backgroundColor};
			color: ${button.primary.color};
			-webkit-tap-highlight-color: transparent;
			outline: none;
			-ms-touch-action: manipulation;
			touch-action: manipulation;
		}
		&:active {
			background-color: ${button.primary.backgroundColor};
			color: ${button.primary.color};
			-webkit-tap-highlight-color: transparent;
			outline: none;
			-ms-touch-action: manipulation;
			touch-action: manipulation;
		}
		&:disabled {
			background-color: ${button.primary.backgroundColor};
			color: ${button.primary.color};
			cursor: not-allowed;
		}
	`;

  const secondaryRules = `
		background-color: ${button.secondary.backgroundColor};
		color: ${button.secondary.color};
		&:hover {
			background-color: ${button.secondary.backgroundColor};
            color: ${button.secondary.color};
		}
		&:focus {
			background-color: ${button.secondary.backgroundColor};
            color: ${button.secondary.color};
			-webkit-tap-highlight-color: transparent;
			outline: none;
			-ms-touch-action: manipulation;
			touch-action: manipulation;
		}
		&:active {
			background-color: ${button.secondary.backgroundColor};
            color: ${button.secondary.color};
			-webkit-tap-highlight-color: transparent;
			outline: none;
			-ms-touch-action: manipulation;
			touch-action: manipulation;
		}
		&:disabled {
			background-color: ${button.secondary.backgroundColor};
            color: ${button.secondary.color};
			cursor: not-allowed;
		}
	`;

  if (props.primary) {
    return primaryRules;
  } else if (props.secondary) {
    return secondaryRules;
  } else {
    return secondaryRules;
  }
};

export const Button = styled.button.attrs((props) => ({
  pt: 2,
  pb: 2,
  pl: 4,
  pr: 4,
  ...props
}))`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-family: "Inter", -apple-system, system-ui, BlinkMacSystemFont,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  gap: ${(p) => getTheme(p).layout.defaultSpacing * 2}px;
  border-radius: ${(p) => getTheme(p).layout.borderRadius};
  ${getBoxStyles};
  ${buttonMixIn};
`;
