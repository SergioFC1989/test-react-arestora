import React from "react";

import { InputCheckBox } from "../InputCheckBox/InputCheckBox";
import { InputText } from "../InputText/InputText";
import "./Form.scss";

export const Form = ({
  onSubmit,
  data,
  register,
  errors,
  textButton,
  isClosed,
}) => (
  <>
    {data.map((item) => (
      <div key={item.fid} className="form">
        <h3>{item.title}</h3>
        <form className="form__container" onSubmit={onSubmit}>
          {item.questions.map((field) => {
            switch (field.type) {
              case "TEXT":
                return (
                  <>
                    <InputText
                      key={field.qid}
                      disabled={isClosed}
                      maxLength={field.options.map(
                        (option) => option.input.max
                      )}
                      minLength={field.options.map(
                        (option) => option.input.min
                      )}
                      label={field.options.map((option) => option.label)}
                      name={String(field.qid)}
                      register={register}
                      required={field.required}
                    />
                    {Object.keys(errors).length > 0 && (
                      <span className="form__text-error">
                        {Object.values(errors).map((item) => item.message)}
                      </span>
                    )}
                  </>
                );

              case "CHECK":
                return (
                  <InputCheckBox
                    key={field.qid}
                    disabled={isClosed}
                    label={!field.label ? "Sin etiqueta" : field.label}
                    name={String(field.qid)}
                    register={register}
                    options={field.options}
                    required={field.required}
                  />
                );

              default:
                return null;
            }
          })}
          <button
            className="form__submit-button"
            disabled={isClosed}
            type="submit"
          >
            {textButton}
          </button>
        </form>
      </div>
    ))}
  </>
);
