import axios from "axios";
import { CHESTS_DATA, CHESTS_ERROR } from "./types";

export const getChestsData = tag => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/clan/${tag}/chests`);

    dispatch({
      type: CHESTS_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CHESTS_ERROR,
      payload: { msg: err.message }
    });
  }
};
