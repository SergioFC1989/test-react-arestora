import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useThreadReducer } from "../../hooks/useThreadReducer";

export const useThreadPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const { state, getThread, acceptThread } = useThreadReducer();

  useEffect(() => {
    if (params.cfsKey && params.cfsToken) {
      getThread(params.cfsKey, params.cfsToken);
    }
  }, [getThread, params.cfsKey, params.cfsToken]);

  const mapEntriesToOids = useCallback(
    (data) =>
      Object.entries(data)
        .map(([oid, value]) => ({
          oid: Number(oid),
          value: String(value),
        }))
        .filter((elem) => elem.value !== "" && elem.value !== "false"),
    []
  );

  const handleOnSubmit = useCallback(
    async (data) => {
      const mappedEntriesToOids = mapEntriesToOids(data);

      console.log({ mappedEntriesToOids });
      const agreementData = {
        ...state.thread,
        agreement: {
          ...state.thread.agreement,
          forms: state.thread.agreement.forms.map((form) => ({
            ...form,
            questions: form.questions.map((question) => ({
              ...question,
              answers: question.options.map((option) => {
                const valueOid = mappedEntriesToOids.find(
                  (elem) => String(elem.oid) === String(option.oid)
                );

                if (valueOid) {
                  return valueOid;
                }
              }),
              options: question.options.map((option) => {
                const valueOid = mappedEntriesToOids.find(
                  (elem) => String(elem.oid) === String(option.oid)
                );

                if (valueOid) {
                  return { ...option, value: String(valueOid.value) || "" };
                }
              }),
            })),
          })),
        },
      };

      await acceptThread(
        params.cfsKey,
        params.cfsToken,
        agreementData.agreement.forms
      );
    },
    [
      acceptThread,
      mapEntriesToOids,
      params.cfsKey,
      params.cfsToken,
      state.thread,
    ]
  );

  return {
    register,
    handleSubmit,
    handleOnSubmit,
    errors,
    state,
  };
};
