import { threadAction } from "../actions/threadAction";

export const threadReducer = (state = {}, action) => {
  switch (action.type) {
    case threadAction.FETCH_THREAD_REQUEST ||
      threadAction.ACCEPT_THREAD_REQUEST:
      return { ...state, loading: true, error: null };

    case threadAction.FETCH_THREAD_SUCCESS:
      return { ...state, loading: false, thread: action.payload };

    case threadAction.ACCEPT_THREAD_SUCCESS:
      return { ...state, loading: false, thread: action.payload };

    case threadAction.FETCH_THREAD_FAILURE ||
      threadAction.ACCEPT_THREAD_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
