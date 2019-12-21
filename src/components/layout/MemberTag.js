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
          <h5 className="card-title">
            <div>
              <img src={playerData.favoriteCardIcon} alt="" />
            </div>
            {playerData.name}
          </h5>
          <p className="card-text"></p>
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
              <h5>
                <h5>{playerData.donationsReceived}</h5>
              </h5>
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
              <h5>
                <h5>{playerData.warDayWins}</h5>
              </h5>
            </div>
            <div className="col-4">
              <p>Challenge Wins</p>
              <h5>{playerData.challengeWins}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-2">
        <div className="portfolio clearfix">
          {playerData.currentDeck === null
            ? ""
            : playerData.currentDeck.map(card => (
                <figure className="project">
                  <img src={card.icon} alt="" />
                </figure>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  playerData: state.playerData
});

export default connect(mapStateToProps, { getPlayerData })(MemberTag);
