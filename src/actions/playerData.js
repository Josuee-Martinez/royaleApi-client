import axios from "axios";
import { PLAYER_DATA, PLAYER_ERROR } from "./types";

export const getPlayerData = tag => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/clan/${tag}`);

    dispatch({
      type: PLAYER_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PLAYER_ERROR,
      payload: { msg: err.message }
    });
  }
};
