import { CLAN_DATA, CLAN_ERROR } from "../actions/types";

const initialState = {
  badge: "",
  description: "",
  name: "",
  trophies: "",
  requiredScore: "",
  members: [],
  location: "",
  tag: "",
  score: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CLAN_DATA:
      return {
        ...state,
        badge: payload.badge.image,
        description: payload.description,
        name: payload.name,
        trophies: payload.trophies,
        requiredScore: payload.requiredScore,
        members: payload.members,
        location: payload.location,
        tag: payload.tag,
        score: payload.score
      };

    default:
      return state;
  }
}
