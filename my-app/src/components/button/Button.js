import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ButtonStyles = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	line-height: 1;
	border-radius: 8px;
	font-weight: 300;
	display: block;
	min-width: ${(props) => props.width || "20px"};
	height: ${(props) => props.height || "46px"};
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	${(props) =>
		props.kind === "primary" &&
		css`
			background: linear-gradient(85.76deg, #e12d2d, #1254fe);
			font-weight: 500;
			font-size: 16px;
			:hover {
				opacity: 0.7;
				transition: all 0.2s ease-in;
			}
		`};
	${(props) =>
		props.kind === "secondary" &&
		css`
			background: #30384d;
			font-weight: 500;
			font-size: 14px;
			line-height: 13px;
			border-radius: 5px;
			font-style: normal;
			color: white;
			margin-bottom: 50px;
			:hover {
				background: #8e99f8;
				transition: all 0.2s ease-in;
			}
		`};
	${(props) =>
		props.active === true &&
		css`
			background: #8e99f8;
		`};
`;

const Button = ({
	className = "button-component",
	children,
	type = "button",
	kind = "primary",
	active = false,
	onClick = () => {},
	...props
}) => {
	const { to } = props;
	if (to !== "" && typeof to === "string") {
		return (
			<NavLink to={to} style={{ display: "inline-block" }}>
				<ButtonStyles
					className={`${className} ${active ? "active" : ""}`}
					type={type}
					active={active}
					kind={kind}
					onClick={onClick}
					{...props}
				>
					{children}
				</ButtonStyles>
			</NavLink>
		);
	}
	return (
		<ButtonStyles
			className={`${className} button-component ${active ? "active" : ""}`}
			type={type}
			active={active}
			kind={kind}
			onClick={onClick}
			{...props}
		>
			{children}
		</ButtonStyles>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf(["button", "submit"]),
	isLoading: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
	kind: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
