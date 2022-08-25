import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 15px;
  border: 1px solid #353242;
  border-radius: 8px;
  transition: all 0.2s linear;
  background-color: rgba(48, 35, 52, 0.5);

  ::-webkit-input-placeholder {
    color: #84878b;
  }
  ::-moz-input-placeholder {
    color: #84878b;
  }
`;

const Input = ({
  name = "",
  type = "text",
  control,
  children,
  className = "",
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyles
      name={name}
      type={type}
      className={`${className}`}
      {...field}
      {...props}
    ></InputStyles>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
};

export default Input;
