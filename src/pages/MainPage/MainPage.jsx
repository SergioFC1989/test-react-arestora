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
          register={register}
          name="cfsKey"
          required
        />
        <InputText
          label="CFS Token"
          placeholder="Introduzca un CFS Token..."
          register={register}
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
