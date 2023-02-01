import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ScheduleACall.css';
import logo from "../../images/logo.png";
import clockImage from "../../images/clock.png";

const ScheduleACall = () => {
      return (
            <div className="schedule-call-section">
                  <Container>
                        <h1>Schedule Call</h1>

                        <div className="schedule-call-content">      
                              <Row>
                                    <Col sm={12} xs={12} md={6} lg={6}>
                                          <div className="schedule-left-side">
                                                <div className="schedule-logo">
                                                      <img src={logo} alt=""/>
                                                </div>
                                                <div className="info p-4">
                                                      <h6>Hyperlink Infosystem</h6>
                                                      <h1>Introduction Call With <br /> Hyperlink Infosystem</h1>
                                                      <div className="clock">
                                                            <img src={clockImage} alt="" />
                                                            30&nbsp;min
                                                      </div>
                                                      <div className="agenda">
                                                            <p>Agenda:</p>
                                                            <p>1. Introduction of Hyperlink infosystem</p>
                                                            <p>2. Requirement understanding</p>
                                                            <p>3. Similar work showcase</p>
                                                            <p>4. Next actions</p>
                                                      </div>
                                                      <button>Cookie settings</button>
                                                </div>
                                          </div>
                                    </Col>
                                    <Col sm={12} xs={12} md={6} lg={6}>
                                          <div className="select-date-time">
                                                <h2>Select a Date & Time</h2>
                                                <input type="date" />
                                                <p>Time zone</p>
                                          </div>
                                    </Col>
                              </Row>
                        </div>

                  </Container>
            </div>
      );
};

export default ScheduleACall;