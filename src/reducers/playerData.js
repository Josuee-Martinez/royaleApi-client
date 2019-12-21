import { PLAYER_DATA, PLAYER_ERROR } from "../actions/types";

const initialState = {
  name: "",
  trophies: "",
  clanName: "",
  role: "",
  donations: "",
  donationsReceived: "",
  donationsDelta: "",
  arena: "",
  clanCardsCollected: "",
  maxTrophies: "",
  currentDeck: [],
  cardsFound: "",
  favoriteCard: "",
  favoriteCardIcon: "",
  totalDonations: "",
  level: "",
  challengeWins: "",
  wins: "",
  warDayWins: "",
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PLAYER_DATA:
      console.log(payload);
      return {
        ...state,
        name: payload.name,
        trophies: payload.trophies,
        clanName: payload.clan.name,
        role: payload.clan.role,
        donations: payload.clan.donations,
        donationsReceived: payload.clan.donationsReceived,
        donationsDelta: payload.clan.donationsDelta,
        arena: payload.arena.name,
        clanCardsCollected: payload.stats.clanCardsCollected,
        maxTrophies: payload.stats.maxTrophies,
        cardsFound: payload.stats.cardsFound,
        favoriteCard: payload.stats.favoriteCard.name,
        favoriteCardIcon: payload.stats.favoriteCard.icon,
        totalDonations: payload.totalDonations,
        level: payload.level,
        challengeWins: payload.stats.challengeMaxWins,
        wins: payload.games.wins,
        warDayWins: payload.games.warDayWins,
        currentDeck: payload.currentDeck
      };
    case PLAYER_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
}
