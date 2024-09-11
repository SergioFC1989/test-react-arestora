import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFoundPage.scss";
import { ButtonNavigateMain } from "../../components/ButtonNavigateMain/ButtonNavigateMain";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <p>404 - Ha ocurrido un error inesperado...</p>
      <ButtonNavigateMain color="danger" message="Volver al Inicio" />
    </div>
  );
};
