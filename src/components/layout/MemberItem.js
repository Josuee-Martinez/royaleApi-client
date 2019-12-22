import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MemberItem = ({ member }) => {
  return (
    <tr>
      <td>{member.rank}</td>
      <td membere={member}>
        <Link to={`/member/${member.tag}`}>{member.name}</Link>
      </td>
      <td>{member.trophies}</td>
      <td>{member.role.toLowerCase()}</td>
      {/* <td>{member.donations}</td> */}
      <td>{member.expLevel}</td>
    </tr>
  );
};

export default MemberItem;
