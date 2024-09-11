import { useCallback, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { threadAction } from "../actions/threadAction";
import { threadReducer } from "../reducers/threadReducer";
import { threadState as initialState } from "../states/threadState";

import { getThreadByToken, postAcceptThread } from "../services/api";

export const useThreadReducer = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(threadReducer, initialState);

  const getThread = useCallback(
    async (cfsKey, cfsToken) => {
      dispatch({ type: threadAction.FETCH_THREAD_REQUEST });
      try {
        const response = await getThreadByToken(cfsKey, cfsToken);
        dispatch({
          type: threadAction.FETCH_THREAD_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.error("Error fetching thread:", error);
        navigate("/error/404");
      }
    },
    [dispatch]
  );

  const acceptThread = useCallback(
    async (cfsKey, cfsToken, agreementData) => {
      dispatch({ type: threadAction.ACCEPT_THREAD_REQUEST });
      try {
        const response = await postAcceptThread(
          cfsKey,
          cfsToken,
          agreementData
        );
        dispatch({
          type: threadAction.ACCEPT_THREAD_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.error("Error accepting thread:", error.message);
        navigate("/error/404");
      }
    },
    [dispatch]
  );

  const values = useMemo(
    () => ({ state, getThread, acceptThread }),
    [state, getThread, acceptThread]
  );

  return values;
};
