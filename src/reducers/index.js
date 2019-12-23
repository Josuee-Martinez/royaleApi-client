import { combineReducers } from "redux";
import clanData from "./clanData";
import playerData from "./playerData";
import chestsData from "./chestsData";

export default combineReducers({ clanData, playerData, chestsData });
