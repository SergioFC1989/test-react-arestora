import React from "react";

import "./InputText.scss";

/**
 * InputText component renders a labeled text input field with validation.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {boolean} [props.required=false] - Whether the input field is required.
 * @param {boolean} [props.disabled=false] - Whether the input field is disabled.
 * @param {number} [props.maxLength] - The maximum length of the input field.
 * @param {number} [props.minLength] - The minimum length of the input field.
 * @param {Function} [props.register=() => {}] - The register function for form validation.
 *
 * @returns {JSX.Element} The rendered InputText component.
 */
export const InputText = ({
  label,
  placeholder,
  name,
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
