import * as actions from "../../actiontypes/actiontypes";
import { Action } from "../../interface/store.interface";
import { updateObject } from "../../utils/store";

const initialState = {
  token: null,
  isLogin: false,
};

const login = (data: any) => {
  if (data && data.token && data.isActive) {
    return {
      token: data.token,
      isLogin: true,
    };
  } else {
    return initialState;
  }
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return updateObject(initialState, login(action.data));
    default:
      return state;
  }
};

export default reducer;
