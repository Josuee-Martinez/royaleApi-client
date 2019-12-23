import { CHESTS_DATA, CHESTS_ERROR } from "../actions/types";

const initialState = {
  upcoming: [],
  superMagical: "",
  magical: "",
  legendary: "",
  epic: "",
  giant: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHESTS_DATA:
      console.log(payload);
      return {
        ...state
      };

    default:
      return state;
  }
}
