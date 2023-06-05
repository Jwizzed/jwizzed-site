import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Project() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const carouselItems = [
    {
      imgSrc: require('../img/equalize.png'),
      githubLink: 'https://github.com/Jwizzed/Equalize',
      className: 'theme2',
      btnClassName: 'myBtn btnEq'
    },
    {
      imgSrc: require('../img/mate.png'),
      githubLink: 'https://github.com/Jwizzed/Mate',
      className: 'theme3',
      btnClassName: 'myBtn btnM'
    },
    {
      imgSrc: require('../img/elon.png'),
      githubLink: 'https://github.com/Jwizzed/Homeless-Elon',
      className: 'theme4',
      btnClassName: 'myBtn btnE'
    }
  ];

  return (
    <div id="project" className={carouselItems[activeIndex].className}>
      <h2 className="title pt-4 mb-5">Projects</h2>

      <div className="marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">

      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <a className="link" href={item.githubLink} target="_blank" rel="noopener noreferrer">
                <button className={item.btnClassName}>Github</button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

        </div>
        <div className="bottom-bar"></div>
      </div>



    </div>
  );
}

export default Project;
