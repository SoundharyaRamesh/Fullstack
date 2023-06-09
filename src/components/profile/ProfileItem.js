import React from "react";
import { Link } from 'react-router-dom'

const ProfileItem = (props) => {
  const strchk = props.acc_no.replace(/.(?=.{4,}$)/g, 'X');
//   console.log(strchk);
  return (
    <div className="box">
      <div className="glass"></div>
      <div className="glass-content">
        <h2>{props.name}</h2>
        <br />
        <p className="profession">
          <i>{props.profession}</i>
        </p>
        <p>Email: {props.email}</p>
        <p>Account No: {strchk}</p>
        <p>Account Balance: {props.acc_balance}</p>
        <br />
        <Link to="/transaction">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          TRANSFER</Link>
      </div>
    </div>
  );
};

export default ProfileItem;
