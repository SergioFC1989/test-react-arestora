import React from "react";

import "./TextLabel.scss";

/**
 * TextLabel component renders a label and a message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The text to display as the label.
 * @param {string} props.message - The text to display as the message.
 * @returns {JSX.Element} The rendered TextLabel component.
 */
export const TextLabel = ({ label, message }) => (
  <div className="text-label">
    <label>{label}</label>
    <span>{message}</span>
  </div>
);
