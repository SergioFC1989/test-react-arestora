import React from "react";

import "./InputText.scss";

/**
 * InputText component renders a labeled text input field.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {Function} props.register - The register function from react-hook-form for input validation.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {boolean} props.required - Indicates if the input field is required.
 * @returns {JSX.Element} The rendered InputText component.
 */
export const InputText = ({
  label,
  placeholder,
  register,
  name,
  value,
  required,
}) => (
  <div className="input-text">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      {...register(name, {
        required: required ? `El campo ${label} está vacío` : false,
      })}
    />
  </div>
);
