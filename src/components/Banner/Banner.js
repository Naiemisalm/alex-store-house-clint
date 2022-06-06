import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
   return(
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/businessindia/IndiaTv4e9cae_DSLR-camera.jpg"
      alt="First slide"
      width="100%" height='500'
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i0.wp.com/www.wate.com/wp-content/uploads/sites/42/2022/04/1040x585-2022-0224-best-canon-dslr-cameras-faa115.jpg?w=2000&ssl=1"
      alt="Second slide"
      width="100%" height='500'
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://internetshuffle.com/wp-content/uploads/2022/01/canon-printer.jpg"
      alt="Third slide"
      width="100%" height='500'
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   );
};

export default Banner;
