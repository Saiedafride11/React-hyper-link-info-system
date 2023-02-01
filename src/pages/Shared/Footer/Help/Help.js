import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './Help.css';

const about = ["Contact Us", "Privacy Policy", "Sitemap", "Global"];

const Help = () => {
      return (
            <div className="my-5 footer-help">
                  <Container>
                        <Row>
                              <Col sm={12} xs={12} md={4} lg={4}>
                                    <h5 className="footer-help-title help">Help</h5>
                                    {
                                          about?.map((data, index) => (
                                                <Link to="/" key={index}>
                                                      <p>{data}</p>
                                                </Link>
                                          ))
                                    }
                                    <br />
                                    <br />
                              </Col>

                              <Col sm={12} xs={12} md={8} lg={8}>
                                    <h5 className="footer-help-title subscribe">Subscribe to our newsletter</h5>
                                    <p className="text-white">Stay updated with latest technology trends and topics with us.</p>
                                    <form>
                                          <input type="email" name="email" id="email" className="form-control border-right-0 sub-msg error" placeholder="Email@company.com"/>
                                    </form>
                              </Col>
                        </Row>
                  </Container>
            </div>
      );
};

export default Help;