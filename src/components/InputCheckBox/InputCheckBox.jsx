import React from "react";

import "./InputCheckBox.scss";

export const InputCheckBox = ({
  label,
  required,
  disabled,
  options,
  register = () => {},
}) => {
  return (
    <div className="input-checkbox">
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.oid}>
          <input
            type="checkbox"
            disabled={disabled}
            name={option.oid}
            {...register(String(option.oid), {
              required,
            })}
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
};
