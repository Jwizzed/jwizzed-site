import React, { useState, useEffect } from 'react';

function FirstPage() {
  const [circleColor, setCircleColor] = useState('black'); // Initial color (red)
  const colors = ['#1E7976', '#052F32'];
  let colorIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (colorIndex < colors.length) {
        setCircleColor(colors[colorIndex]);
        colorIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="rounded-circle" style={{ backgroundColor: circleColor }}></div>
      </div>
      <div className="noOverFlow">
          <h1 className="text-center fName">KRITTIN</h1>
        <h1 className="text-center lName">SETDHAVANICH</h1>
        <h1 className="text-center fCareer career">SOFTWARE</h1>
        <h1 className="text-center lCareer career">ENGINEER</h1>
      </div>
              <img className="fPic" src={require("../img/first.png")} alt="panda"/>
    </section>
  );
}

export default FirstPage;
