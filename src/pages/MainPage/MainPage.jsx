import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { InputText } from "../../components/InputText/InputText";

import { AlertError } from "../../components/AlertError/AlertError";
import "./MainPage.scss";

export const MainPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ cfsKey, cfsToken }) => navigate(`/${cfsKey}/${cfsToken}`);

  return (
    <div className="main-page">
      <h3>Busca un hilo y comienza a trabajar</h3>
      {Object.keys(errors).length > 0 && (
        <AlertError
          title="Por favor, comprueba el formulario"
          messages={Object.values(errors)}
        />
      )}
      <form className="main-page__form" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="CFS Key"
          placeholder="Introduzca un CFS Key..."
          value="Q5599222HHXiihh6GG8822jj"
          register={register}
          name="cfsKey"
          required
        />
        <InputText
          label="CFS Token"
          placeholder="Introduzca un CFS Token..."
          register={register}
          value="bf2e7a0ed8af913cca266eea6c1f09100e07ae85021e81d5ff5ed2f8a350b384"
          name="cfsToken"
          required
        />
        <button className="main-page__button-submit" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};
