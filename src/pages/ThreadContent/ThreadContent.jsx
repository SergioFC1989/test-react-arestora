import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderBarCFS } from "../../components/HeaderBarCFS/HeaderBarCFS";
import { Loader } from "../../components/Loader/Loader";
import { ThreadHtml } from "../../components/ThreadHtml/ThreadHtml";

import { useThreadReducer } from "../../hooks/useThreadReducer";
import "./ThreadContent.scss";

export const ThreadContent = () => {
  const { state, getThread } = useThreadReducer();
  const params = useParams();

  useEffect(() => {
    params.cfsKey &&
      params.cfsToken &&
      getThread(params.cfsKey, params.cfsToken);
  }, [getThread]);

  console.log(state.thread);

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
      </section>
    )
  );
};
