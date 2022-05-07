import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
   return(
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3mFRCk5yeGt3MTtnmEoEnmzUV5HNu1nAqMhQ_2tDHgJ1vU7GaGODlPc8ulj7SlB4PSM&usqp=CAU"
      alt="First slide"
      width="100%" height='400'
    />
    <Carousel.Caption>
      <h3 className='text-dark'>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyxyPbJcQmKORPbdPWLn6zSZGA4j-bOg7jw&usqp=CAU"
      alt="Second slide"
      width="100%" height='400'
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7o2jQPxNKbGDePRl3iIZr2ZAJNfeVIu1-w&usqp=CAU"
      alt="Third slide"
      width="100%" height='400'
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   );
};

export default Banner;


// return (
//     <div>
        
//         <Carousel className='container mt-5'>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3mFRCk5yeGt3MTtnmEoEnmzUV5HNu1nAqMhQ_2tDHgJ1vU7GaGODlPc8ulj7SlB4PSM&usqp=CAU"
//                     alt="First slide"
//                     width="100%" height='400'
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyxyPbJcQmKORPbdPWLn6zSZGA4j-bOg7jw&usqp=CAU"
//                     alt="Second slide"
//                     width="100%" height='400'
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7o2jQPxNKbGDePRl3iIZr2ZAJNfeVIu1-w&usqp=CAU"
//                     alt="Third slide"
//                     width="100%" height='400'
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     </div>
// );
// };