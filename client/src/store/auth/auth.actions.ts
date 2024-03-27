import * as actions from "../../actiontypes/actiontypes";
import { loginUser } from "../../services/auth.service";

export const loginUserAction = (data) => async (dispatch) => {
  const response = await loginUser(data);
  // parse you response here and then send in dispatch data
  dispatch({
    type: actions.LOGIN_USER,
    data: response,
  });
  return response.data;
};