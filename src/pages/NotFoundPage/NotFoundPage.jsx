import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <p>404 - Ha ocurrido un error</p>
      <span className="not-found-page__link" onClick={() => navigate("/")}>
        Volver a la página de inicio
      </span>
    </div>
  );
};
