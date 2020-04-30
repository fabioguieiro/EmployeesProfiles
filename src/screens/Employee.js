import React from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import './Employee.css';
import Line from  '../assets/svg/Group-130.svg'
import Company from  '../assets/svg/Group-142.svg'
import Vertical from  '../assets/svg/vertical-line.svg'
import BackIcon from  '../assets/svg/back-icon.svg'



function Profile() {
  const history = useHistory()
  const location = useLocation()
  function backHandler() {
      history.goBack()
  }
  const {employee} = location.state
  return (
    <div className="App">
      <div className="header-bg" >
        <div className="back-icon"  onClick={backHandler}><img className="back-icon" alt="back-icon" src={ BackIcon }></img></div>
      </div>
      
          <img className="profile-pic" src={employee.photo} alt="profile-pic"></img>
          <p className="name">{employee.name}</p>
          <p className="position">{employee.position}</p>
          <div className="info-box">
            <div className="row">
              <img className="company" src={Company} alt="divider-line"></img>  
              <img className="vertical" src={Vertical} alt="vertical-line"></img>  
              <div className="telephone-group">
                <p className="telephone">{employee.phoneNumber1}1</p>
                <p className="telephone">{employee.phoneNumber2}</p>
              </div>
            </div>
            <p className="e-mail">{employee.email}</p>
            <img className="line" src={Line} alt="divider-line"></img>
          </div>
          <div className="qr-div">
            <img className="qr-img" src={employee.qrcode} alt="QR-code"></img>
          </div>

        <div className="footer"></div>
    </div>
  );
}

export default Profile;
