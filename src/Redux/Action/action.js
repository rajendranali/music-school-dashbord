import { ACTION_TYPE } from "../ActionType/actionType";

export const actionCreator = (payload) => ({
    type: ACTION_TYPE,
    payload,
  });