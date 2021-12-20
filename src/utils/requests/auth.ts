import { store } from "../..";
import { userTokenSelector } from "../../redux/user/selectors";

export const authorizationFetch = (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${userTokenSelector(store.getState())}`,
    },
  });
