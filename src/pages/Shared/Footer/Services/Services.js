import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
      {
            "title": "About",
            "css_class": "about",
            "data": ["Who We Are", "Career", "Events", "Services", "Industries", "Case Study", "Portfolio", "Sitemap", "Contact Us"]
      },
      {
            "title": "Mobile",
            "css_class": "mobile",
            "data": ["Android Apps", "iPhone Apps", "Hybrid Apps", "Flutter", "React Native", "Kotlin", "Ionic", "Swift", "Xamrin"]
      },
      {
            "title": "WEB",
            "css_class": "web",
            "data": ["PHP", "Java", "Python", "Wordpress", "Drupal", "Laravel", "CodeIgniter", "CakePHP", "TypeScript"]
      },
      {
            "title": "Ecommerce",
            "css_class": "ecommerce",
            "data": ["Magento", "Shopify", "Ubercart", "Prestashop", "CS Cart", "VirtueMart", "BigCommerce", "WooCommerce"]
      },
      {
            "title": "AI & ML",
            "css_class": "ai",
            "data": ["Text to Speech", "Business Intelligence", "Data Forecasting", "Natural Language Processing", "Data Analytics", "Object Recognition", "Sentimental Analysis", "Alexa Skills Development"]
      },
      {
            "title": "IoT & Embedded",
            "css_class": "iot",
            "data": ["IoT App", "Embedded Software", "IoT Hardware Prototyping", "IoT Dashboard and Analytics", "Smart Home - Home Automation"]
      },
      {
            "title": "Blockchain",
            "css_class": "blockchain",
            "data": ["Wallet", "Exchange", "Ethereum", "Hyperledger", "Smart Contracts", "Private Blockchains", "NFT Marketplace"]
      },
      {
            "title": "Game",
            "css_class": "game",
            "data": ["Unity 3D", "Unreal Engine", "Augmented Reality", "Virtual Reality", "Casual Games", "Metaverse"]
      },
      {
            "title": "Salesforce",
            "css_class": "salesforce",
            "data": ["Salesforce Development", "Salesforce Consulting", "Salesforce Implementation"]

      }
]

const Services = () => {
      return (
            <div className="footer-services-section">
                  <Container>
                        <Row>
                             
                              {
                                    servicesData?.map((service, index) => (
                                          <Col sm={12} xs={12} md={6} lg={4} key={index}>
                                                <h5 className={`footer-services-title ${service.css_class}`}>{service?.title}</h5>
                                                {
                                                      service?.data?.map((data, i) => (
                                                            <Link to="/" key={i}>
                                                                  <p>{data}</p>
                                                            </Link>
                                                      ))
                                                }
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

export default Services;