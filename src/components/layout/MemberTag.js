import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { getPlayerData } from "../../actions/playerData";
import axios from "axios";
const MemberTag = ({ match, getPlayerData, playerData }) => {
  useEffect(() => {
    getPlayerData(match.params.tag);
  }, [getPlayerData, match.params.tag]);

  return (
    <Fragment>
      <div className="card my-2">
        <div className="card-body center">
          <h4 className="card-text">{playerData.name}'s Current Deck</h4>
          <div className="clearfix">
            {playerData.currentDeck === null
              ? ""
              : playerData.currentDeck.map(card => (
                  <figure className="deck" key={card.id}>
                    <img src={card.icon} alt="" />
                  </figure>
                ))}
          </div>
          <hr />
          <div className="row ">
            <div className="col-4">
              <p>Trophies</p>
              <h5>{playerData.trophies}</h5>
            </div>
            <div className="col-4">
              <p>Arena</p>
              <h5>{playerData.arena}</h5>
            </div>
            <div className="col-4">
              <p>Highest Trophies</p>
              <h5>{playerData.maxTrophies}</h5>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-4">
              <p>Donations</p>
              <h5>{playerData.donations}</h5>
            </div>
            <div className="col-4">
              <p>Donations Recieved</p>

              <h5>{playerData.donationsReceived}</h5>
            </div>
            <div className="col-4">
              <p>Donation Average</p>
              <h5>{playerData.donationsDelta}</h5>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <p>Wins</p>
              <h5>{playerData.wins}</h5>
            </div>
            <div className="col-4">
              <p>War Day Wins</p>

              <h5>{playerData.warDayWins}</h5>
            </div>
            <div className="col-4">
              <p>Challenge Wins</p>
              <h5>{playerData.challengeWins}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="card my-2">
        <div className="card-body center">
          <h4>More Stats</h4>
          <br />
          <div className="row ">
            <div className="col-4">
              <p>Clan Cards Collected</p>
              <h5>{playerData.clanCardsCollected}</h5>
            </div>
            <div className="col-4">
              <p>Cards unlocked</p>
              <h5>{playerData.cardsFound}</h5>
            </div>
            <div className="col-4">
              <p>Lifetime Donations</p>
              <h5>{playerData.totalDonations}</h5>
            </div>
          </div>
          <hr />
          <div className="row ">
            <div className="col-4">
              <p>Games Played</p>
              <h5>{playerData.gamesPlayed}</h5>
            </div>
            <div className="col-4">
              <p>Games Lost</p>
              <h5>{playerData.gamesLost}</h5>
            </div>
            <div className="col-4">
              <p>Games Drawn</p>
              <h5>{playerData.gamesDrawn}</h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  playerData: state.playerData
});

export default connect(mapStateToProps, { getPlayerData })(MemberTag);
