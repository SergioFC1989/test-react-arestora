import React from "react";

import "./AlertError.scss";

/**
 * AlertError component displays an error alert with a title and a list of messages.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the error alert.
 * @param {Array<{ message: string }>} props.messages - An array of message objects to be displayed.
 * @returns {JSX.Element} The rendered AlertError component.
 */
export const AlertError = ({ title, messages }) => (
  <div className="error">
    <p className="alert-error__title">{title}</p>
    {messages.map(({ message }) => (
      <span key={message}>{message}</span>
    ))}
  </div>
);
