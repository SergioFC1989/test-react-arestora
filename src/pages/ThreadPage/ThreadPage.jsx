import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Form } from "../../components/Form/Form";
import { HeaderBarCFS } from "../../components/HeaderBarCFS/HeaderBarCFS";
import { Loader } from "../../components/Loader/Loader";
import { ThreadHtml } from "../../components/ThreadHtml/ThreadHtml";

import { useThreadReducer } from "../../hooks/useThreadReducer";
import "./ThreadPage.scss";

export const ThreadPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams();

  const { state, getThread, acceptThread } = useThreadReducer();

  useEffect(() => {
    params.cfsKey &&
      params.cfsToken &&
      getThread(params.cfsKey, params.cfsToken);
  }, [getThread]);

  const mapEntriesToOids = (data) => {
    return Object.entries(data).map(([oid, value]) => ({ oid, value }));
  };

  const onSubmit = async (data) => {
    const mappedEntriesToOids = mapEntriesToOids(data);

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

              return {
                ...option,
                value: String(valueOid.value),
              };
            }),
            options: question.options.map((option) => {
              const defaultValue = question.type === "TEXT" ? "" : false;
              const valueOid = mappedEntriesToOids.find(
                (elem) => String(elem.oid) === String(option.oid)
              );

              return {
                ...option,
                value: String(valueOid.value) || String(defaultValue),
              };
            }),
          })),
        })),
      },
    };
    console.log(data);
    // await acceptThread(
    //   params.cfsKey,
    //   params.cfsToken,
    //   agreementData.agreement.forms
    // );
  };

  if (state.loading) {
    return <Loader />;
  }

  return (
    state.thread && (
      <section className="thread-content">
        <HeaderBarCFS
          cfsCode={state.thread.cfscode}
          senderUser={state.thread.sender.user}
          recipientAddress={state.thread.recipient.address}
          data={state.thread.history.sort((a, b) =>
            new Date(a.date) < new Date(b.date) ? 1 : -1
          )}
        />
        <ThreadHtml htmlContent={state.thread.content} />
        <Form
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          data={state.thread.agreement.forms}
          textButton={state.thread.agreement.accept_button_text}
          isClosed={state.thread.closed || state.loading}
        />
      </section>
    )
  );
};
