import React from "react";

import { Form } from "../../components/Form/Form";
import { HeaderBarThread } from "../../components/HeaderBarThread/HeaderBarThread";
import { HtmlContentViewer } from "../../components/HtmlContentViewer/HtmlContentViewer";
import { Loader } from "../../components/Loader/Loader";

import { useThreadPage } from "./useThreadPage";

import "./ThreadPage.scss";

export const ThreadPage = () => {
  const { register, handleOnSubmit, handleSubmit, errors, state } =
    useThreadPage();

  if (state.loading) {
    return <Loader />;
  }

  return (
    state.thread && (
      <section className="thread-content">
        <HeaderBarThread
          cfsCode={state.thread.cfscode}
          senderUser={state.thread.sender.user}
          recipientAddress={state.thread.recipient.address}
          data={state.thread.history.sort((a, b) =>
            new Date(a.date) < new Date(b.date) ? 1 : -1
          )}
        />
        <HtmlContentViewer htmlContent={state.thread.content} />
        <Form
          onSubmit={handleSubmit(handleOnSubmit)}
          register={register}
          errors={errors}
          data={state.thread.agreement.forms}
          textButton={state.thread.agreement.accept_button_text}
          isClosed={state.thread.closed || state.loading}
          isLoading={state.loading}
        />
      </section>
    )
  );
};
