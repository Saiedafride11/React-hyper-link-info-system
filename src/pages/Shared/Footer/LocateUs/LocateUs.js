import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../../components/Title/Title';
import './LocateUs.css';

const locateData = [
      {
            "image": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/india.svg",
            "flag": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg",
            "location": "INDIA (HQ)",
            "details": "C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061",
            "number": "+91 8000-161161"
      },
      {
            "image": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/mumbai.svg",
            "flag": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg",
            "location": "MUMBAI OFFICE",
            "details": "Level 8, Vibgyor Towers, G Block, C62 Bandra Kurla Complex, Mumbai 400 098",
            "number": "+91 8000-161161"
      },
      {
            "image": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/usa.svg",
            "flag": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/us-flag.svg",
            "location": "USA OFFICE",
            "details": "One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.",
            "number": "+1 309 791 4105"
      },
      {
            "image": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/uk.svg",
            "flag": "https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/uk-flag.svg",
            "location": "UK OFFICE",
            "details": "Level 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB",
            "number": "+44 20 8133 8639"
      }
]

const LocateUs = () => {
      return (
            <div className="locate-us-section">
                  <Container>
                        <Title title="Locate Us" fillTitle="Locate Us" color="#fff"/>
                        <Row>
                              {
                                    locateData?.map((data, index) => (
                                          <Col sm={12} xs={12} md={6} lg={3} key={index}>
                                                <div className="d-flex align-items-center text-white">
                                                      <img src={data.image} alt="" />
                                                      <div className="ms-3">
                                                            <div className="d-flex align-items-center">
                                                                  <img src={data.flag} alt="" />
                                                                  <h6>{data.location}</h6>
                                                            </div>
                                                            <p className="details">{data.details}</p>
                                                            <p>{data.number}</p>
                                                      </div>
                                                </div>
                                                <br />
                                                <br />
                                          </Col>
                                    ))
                              }
                        </Row>
                  </Container>
            </div>
      );
};

export default LocateUs;