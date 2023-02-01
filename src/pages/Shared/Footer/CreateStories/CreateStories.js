import React from 'react';
import { Container } from 'react-bootstrap';
import './CreateStories.css';
import arrowRight from "../../../../images/arrow-right-white.svg"

const CreateStories = () => {
      return (
            <Container>
                  <div className="create-stories">
                        <h5>Let’s Create Big Stories Together</h5>
                        <p>
                              Mobile is in our nerves. We don’t just build apps, we create brand.
                              <br/>
                              Choosing us will be your best decision.
                        </p>
                        
                        <button>
                              Get A Quote
                              <img src={arrowRight} alt="" />
                        </button>
                  </div>
            </Container>
      );
};

export default CreateStories;