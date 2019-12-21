import axios from "axios";
import { CLAN_DATA, CLAN_ERROR } from "./types";

export const getClanData = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/clan");

    dispatch({
      type: CLAN_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CLAN_ERROR
    });
  }
};
