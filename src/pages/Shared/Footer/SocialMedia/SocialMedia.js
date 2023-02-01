import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SocialMedia.css';
import Title from '../../components/Title/Title';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// <FontAwesomeIcon icon={faYoutube}/> 
import facebook from '../../../../images/fb-icon.svg';
import twitter from '../../../../images/tw-icon.svg';
import instagram from '../../../../images/insta-icon.svg';
import youtube from '../../../../images/yt-icon.svg';
import tp from '../../../../images/tp-icon.svg';

const SocialMedia = () => {

      const icons = [ twitter, facebook, instagram, youtube, tp ];

      return (
            <div className="footer-social-media my-5">
                  <Container>
                        <Row>
                              <Col sm={12} xs={12} md={12} lg={6}>
                                    <Title title="Social Media" fillTitle="Social" color="#1f1f1f"/>
                                    <p>
                                          Don’t Miss To Follow Us On Our Social
                                          <br />
                                          Networks Accounts.
                                    </p>
                              </Col>
                              <Col sm={12} xs={12} md={12} lg={6}>
                                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                                          {
                                                icons?.map((icon, index) =>  <div className="icon" key={index}>
                                                      <img src={icon} alt="Icon"/>
                                                </div>)
                                          }
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      );
};

export default SocialMedia;