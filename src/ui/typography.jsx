import React from "react";
import styled, { css } from "styled-components";
import { getBoxStyles } from "./box";
import { getTheme } from "./theme";

export const typography = {
  huge: {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 44
  },
  large: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 29
  },
  medium: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24
  },
  default: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19
  }
};

export const typographySizeMixIn = (props) => {
  const { typography } = getTheme(props);
  const selectedSize = typography[props.size] || "default";
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight}px;
    `;
};

export const typographyColorMixIn = ({ color, ...props }) => {
  const selectedColor = () => {
    const { colors } = getTheme(props);
    switch (color) {
      case "danger": {
        return colors.danger;
      }
      case "primary": {
        return colors.textPrimary;
      }
      case "secondary": {
        return colors.textSecondary;
      }
      case "overlay": {
        return colors.textOverlay;
      }
      default: {
        return color;
      }
    }
  };
  const colorToApply = selectedColor();
  return `color: ${colorToApply}; fill: ${colorToApply}`;
};

export const typographyMixin = css`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Inter", -apple-system, system-ui, BlinkMacSystemFont,
    "Helvetica Neue", sans-serif;
  word-break: break-word;
  ${typographySizeMixIn};
  ${typographyColorMixIn};
  ${getBoxStyles}
`;

export const P = styled.p`
  ${typographyMixin}
`;

export const Span = styled.span`
  ${typographyMixin}
`;

export const H1 = styled.h1`
  ${typographyMixin}
`;

export const H2 = styled.h2`
  ${typographyMixin}
`;

export const H3 = styled.h3`
  ${typographyMixin}
`;

export const H4 = styled.h4`
  ${typographyMixin}
`;

export const H5 = styled.h5`
  ${typographyMixin}
`;

export const H6 = styled.h6`
  ${typographyMixin}
`;

export const TextBlock = ({
  size = "default",
  color = "primary",
  renderTag = "span",
  children,
  ...props
}) => {
  switch (renderTag) {
    case "p": {
      return (
        <P {...props} size={size} color={color}>
          {children}
        </P>
      );
    }
    case "h1":
      return (
        <H1 {...props} size={size} color={color}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 {...props} size={size} color={color}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 {...props} size={size} color={color}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 {...props} size={size} color={color}>
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5 {...props} size={size} color={color}>
          {children}
        </H5>
      );
    case "h6":
      return (
        <H6 {...props} size={size} color={color}>
          {children}
        </H6>
      );
    case "span": {
      return (
        <Span {...props} size={size} color={color}>
          {children}
        </Span>
      );
    }
    default: {
      return (
        <P {...props} size={size} color={color}>
          {children}
        </P>
      );
    }
  }
};
