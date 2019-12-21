import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import { getClanData } from "../../actions/clanData";

import MemberItem from "./MemberItem";

const Home = ({ getClanData, clanData }) => {
  useEffect(() => {
    getClanData();
  }, []);

  return (
    <div className="card my-2">
      <div className="card-body center">
        <h5 className="card-title">
          <div>
            <img src={clanData.badge} alt="" />
          </div>
          {clanData.name}
        </h5>
        <p className="card-text ">{clanData.description}</p>
        <hr />
        <div className="row ">
          <div className="col-4">
            <p>War trophies</p>
            <h5>
              <i className="fas fa-trophy"></i> {clanData.trophies}
            </h5>
          </div>
          <div className="col-4">
            <p>Clan score</p>
            <h5>
              <i className="fas fa-trophy"></i> {clanData.score}
            </h5>
          </div>
          <div className="col-4">
            <p>Required trophies</p>
            <h5>
              <i className="fas fa-trophy"></i> {clanData.requiredScore}
            </h5>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-4">
            <p>Location</p>
            <h5>
              <i className="fas fa-flag-usa"></i> {clanData.location.code}
            </h5>
          </div>
          <div className="col-4">
            <p>Tag</p>
            <h5>
              <i className="fas fa-tag"></i> {clanData.tag}
            </h5>
          </div>
          <div className="col-4">
            <p>Members</p>
            <h5>
              <i className="fas fa-users"></i> {clanData.members.length}
            </h5>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Trophies</th>
            <th scope="col">Role</th>
            <th scope="col">Donations</th>
            <th scope="col">Level</th>
          </tr>
        </thead>
        <tbody>
          {clanData.members.map(member => (
            <MemberItem key={member.rank} member={member}></MemberItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  clanData: state.clanData
});

export default connect(mapStateToProps, { getClanData })(Home);
