import React from "react";

import "./InputText.scss";

/**
 * InputText component renders a labeled text input field with validation.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.value - The value of the input field.
 * @param {boolean} props.required - Whether the input field is required.
 * @param {boolean} props.disabled - Whether the input field is disabled.
 * @param {number} [props.maxLength] - The maximum length of the input field.
 * @param {number} [props.minLength] - The minimum length of the input field.
 * @param {Function} [props.register] - The register function for form validation.
 *
 * @returns {JSX.Element} The rendered InputText component.
 */
export const InputText = ({
  label,
  placeholder,
  name,
  value,
  required,
  disabled,
  maxLength = undefined,
  minLength = undefined,
  register = () => {},
}) => (
  <div className="input-text">
    <label>{label}</label>
    <input
      type="text"
      disabled={disabled}
      value={disabled ? value : undefined}
      placeholder={placeholder}
      {...register(name, {
        required: required ? `El campo ${label} está vacío` : false,
        maxLength: {
          value: maxLength,
          message: `El campo ${label} no debe exceder los ${maxLength} caracteres`,
        },
        minLength: {
          value: minLength,
          message: `El campo ${label} debe tener al menos ${minLength} caracteres`,
        },
      })}
    />
  </div>
);
