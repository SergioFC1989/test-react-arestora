import React from "react";

import "./InputCheckBox.scss";

/**
 * InputCheckBox component renders a checkbox input with a label.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the checkbox.
 * @param {boolean} [props.required=false] - Whether the checkbox is required.
 * @param {boolean} props.value - The value of the checkbox.
 * @param {boolean} [props.disabled=false] - Whether the checkbox is disabled.
 * @param {string} props.name - The name of the checkbox input.
 * @param {Function} [props.register=() => {}] - The register function for form handling.
 *
 * @returns {JSX.Element} The rendered InputCheckBox component.
 */
export const InputCheckBox = ({
  label,
  required,
  value,
  disabled,
  name,
  register = () => {},
}) => (
  <div className="input-checkbox">
    <input
      className="input-checkbox__input"
      type="checkbox"
      checked={disabled ? value : undefined}
      disabled={disabled}
      name={name}
      {...register(String(name), {
        required,
      })}
    />
    <span>{label}</span>
  </div>
);
