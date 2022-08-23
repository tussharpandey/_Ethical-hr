import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
const Carausal = () => {
  return <div style={{margin:'10px'}}>
          <Carousel>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="./img/banner1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="./img/banner2.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            
         </Carousel>
      
  </div>;
};

export default Carausal;
