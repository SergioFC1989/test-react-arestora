import React from "react";
import { useNavigate } from "react-router-dom";

import "./ButtonNavigateMain.scss";

/**
 * ButtonNavigateMain component renders a span element that navigates to the main page when clicked.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.message - The message to be displayed inside the span.
 * @param {"danger" | "primary"} [props.color="danger" | "primary"] - The color theme of the button, defaults to "danger".
 *
 * @returns {JSX.Element} The rendered span element with the appropriate class and click handler.
 */
export const ButtonNavigateMain = ({
  message,
  color = "danger" | "primary",
}) => {
  const navigate = useNavigate();

  const _color = color === "danger" ? "danger" : "primary";

  const handleOnClick = () => navigate("/");

  return (
    <span
      className={`button-navigate-main button-navigate-main--${color}`}
      onClick={handleOnClick}
    >
      {message}
    </span>
  );
};
