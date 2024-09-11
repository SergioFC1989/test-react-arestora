import React from "react";

import { InputCheckBox } from "../InputCheckBox/InputCheckBox";
import { InputText } from "../InputText/InputText";
import { Loader } from "../Loader/Loader";

import iconCheckSquare from "../../assets/icon-check-square.svg";
import "./Form.scss";

export const Form = ({
  onSubmit,
  data,
  register,
  errors,
  textButton,
  isClosed,
  isLoading,
}) => {
  const renderTextInput = (field, options, hasAnswers) =>
    options.map((option) => {
      const {
        oid,
        label,
        input: { max, min },
      } = option;

      const inputTextAnswer = hasAnswers
        ? field.answers?.find((answer) => answer.oid === option.oid)
        : null;

      return (
        <div key={oid} className="form__render-text-input">
          <InputText
            disabled={isClosed}
            maxLength={max}
            minLength={min}
            value={inputTextAnswer?.value || ""}
            label={label}
            name={String(oid)}
            register={register}
            required={field.required}
          />
          {errors[oid] && (
            <span className="form__text-error">{errors[oid]?.message}</span>
          )}
        </div>
      );
    });

  const renderCheckBoxInput = (field, options, hasAnswers) =>
    options.map((option) => {
      const inputCheckAnswer = hasAnswers
        ? !!field.answers?.find((answer) => answer.oid === option.oid)
        : false;

      return (
        <div key={option.oid}>
          <InputCheckBox
            value={inputCheckAnswer}
            disabled={isClosed}
            label={option.label}
            name={String(option.oid)}
            register={register}
            required={field.required}
          />
        </div>
      );
    });

  const renderField = (field) => {
    const { label, options, type } = field;
    const hasAnswers = !!field.answers;

    switch (type) {
      case "TEXT":
        return renderTextInput(field, options, hasAnswers);

      case "CHECK":
        return (
          <div className="form__render-check-box-input">
            <label>{label}</label>
            {renderCheckBoxInput(field, options, hasAnswers)}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.fid} className="form">
          <div className="form__title">
            <h3>{item.title}</h3>
            {isClosed && (
              <div className="form__closed">
                <img src={iconCheckSquare} alt="closed" />
                <span>Hilo Cerrado</span>
              </div>
            )}
          </div>
          <form className="form__container" onSubmit={onSubmit}>
            {item.questions.map((field) => (
              <div key={field.qid} className="form__question">
                {renderField(field)}
              </div>
            ))}
            {isLoading ? (
              <Loader />
            ) : (
              <button
                className="form__submit-button"
                disabled={isClosed}
                type="submit"
              >
                {textButton}
              </button>
            )}
          </form>
        </div>
      ))}
    </>
  );
};
