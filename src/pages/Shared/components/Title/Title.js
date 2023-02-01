import React from 'react';
import './Title.css';

const Title = ({title, fillTitle, color}) => {
      
      return (
            <>
                  <style type="text/css">
                        {
                              `
                                    .footer-title h5::before {
                                          content: "${fillTitle}";
                                    }
                                    .footer-title h5::before {
                                          -webkit-text-stroke: 2px ${color};
                                    }
                              `
                        }
                  </style>
                  <div className="footer-title">
                        <h5 style={{color: color}}>{title}</h5>
                  </div>
            </>
      );
};

export default Title;