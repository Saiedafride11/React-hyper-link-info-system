import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CallUsNow.css';
import callIcon from "../../../../images/telephone-fill.svg";
import dateIcon from "../../../../images/call-calendar-icon.svg";

const CallUsNow = () => {
      const [callSection, setCallSection] = useState(false);
      return (
            <div className="call-us-now-section d-flex align-items-center" style={{ right: callSection === true ? 0 : "-300px"}}>
                  <button onClick={() => setCallSection(!callSection)}>
                        <img src={callIcon} alt="" className='call'/>
                  </button>

                  <div className="call-us-now">
                        <h5>Call Us Now</h5>
                        <div className="d-flex flex-column justify-content-start">
                              <a className="mb-2" href="tel:+918000161161">
                                    <img className="me-2" src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg" alt="india"/>
                                    +91 8000 161161
                              </a>
                              <a href="tel:+13097914105">
                                    <img className="me-2" src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/us-flag.svg" alt="usa"/>
                                    +1 309 791 4105
                              </a>
                        </div>
                        <hr />
                        <Link to="/schedule-a-call">
                              <div className="call-us-calender">
                                    <img src={dateIcon} alt="" />
                                    <h6>Schedule Call</h6>
                              </div>
                        </Link>
                  </div>
            </div>
      );
};

export default CallUsNow;