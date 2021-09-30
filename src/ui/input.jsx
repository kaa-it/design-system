import styled from "styled-components";
import { getTheme } from "./theme";
import { forwardRef, useRef, useEffect, useCallback, useMemo } from "react";
import { P } from "./typography";

export const InputWrapper = styled.div`
	width: fit-content;
	text-align: left;
`;

export const StyledInput = styled.div`
	display: flex;
	cursor: text;
	align-items: center;
	justify-content: space-between;
	height: 42px;
	box-sizing: border-box;
	background-color: ${(p) => getTheme(p).colors.secondary};
	border-radius: ${(p) => getTheme(p).layout.borderRadius};
	transition: 0.3s;
	position: relative;
	padding: 0 ${(p) => getTheme(p).layout.defaultSpacing * 3}px;
`;

const InputElement = styled.input`
	display: block;
	cursor: text;
	background-color: transparent;
	border: none;
	width: 100%;
	color: ${(p) => getTheme(p).colors.secondaryContent};
	&:-webkit-autofill {
		-webkit-text-fill-color: ${(p) =>
			getTheme(p).colors.secondaryContent} !important;
	}
	&:focus {
		outline: none;
	}
`;

const InputLabel = styled.label`
	display: block;
	cursor: text;
	text-align: left;
	color: ${(p) => getTheme(p).colors.textPrimary};
	margin-bottom: ${(p) => getTheme(p).layout.defaultSpacing}px;
	transition: 0.3s;
`;

const InputIconContainer = styled.div`
	cursor: text;
	line-height: 0;
`;

const ErroText = styled(P)`
	margin-top: ${(p) => getTheme(p).layout.defaultSpacing}px;
`;

function useCombinedRefs(...refs) {
	const targetRef = useRef(null);
	useEffect(() => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(targetRef.current);
			} else if (ref != null) {
				ref.current = targetRef.current;
			}
		});
	}, [refs]);
	return targetRef;
}

export const Input = forwardRef(
	(
		{
			type,
			label,
			placeholder,
			onChange,
			icon: Icon,
			onIconClick,
			name,
			error,
			value,
			errorText,
			disabled,
			onBlur,
			onFocus
		},
		forwardedRef
	) => {
		const innerRef = useRef(null);
		const ref = useCombinedRefs(innerRef, forwardedRef);

		const handleInputFocus = useCallback(
			(e) => {
				if (typeof onFocus === "function") {
					onFocus(e);
				}
			},
			[onFocus]
		);

		const forceFocus = useCallback(() => {
			ref?.current?.focus();
		}, [ref]);

		const handleInputBlur = useCallback(
			(e) => {
				if (typeof onBlur === "function") {
					onBlur(e);
				}
			},
			[onBlur]
		);

		const onIconClickProxy = useCallback(
			(e) => {
				e.stopPropagation();
				if (typeof onIconClick === "function") {
					onIconClick(e);
				} else {
					forceFocus();
				}
			},
			[onIconClick, forceFocus]
		);

		const iconToRender = useMemo(() => {
			return Icon ? (
				<InputIconContainer onClick={onIconClickProxy}>
					<Icon size="16" />
				</InputIconContainer>
			) : null;
		}, [Icon, onIconClickProxy]);

		const onWrapperClick = useCallback(() => {
			forceFocus();
		}, [forceFocus]);

		const errorToRender = useMemo(
			() =>
				error &&
				errorText && <ErroText color="danger">{errorText}</ErroText>,
			[error, errorText]
		);

		return (
			<InputWrapper>
				<InputLabel>{label}</InputLabel>
				<StyledInput onClick={onWrapperClick}>
					<InputElement
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						type={type}
						ref={ref}
						onChange={onChange}
						name={name}
						value={value}
						placeholder={placeholder}
						disabled={disabled}
					/>
					{iconToRender}
				</StyledInput>
				{errorToRender}
			</InputWrapper>
		);
	}
);
