import React, { useEffect, useState } from 'react';


function About() {
    const [isActive, setIsActive] = useState("");
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

          const activationPosition = 500;

          if (scrollPosition >= activationPosition) {
            setIsActive("active");
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <section id="about">
        <div className="aboutContainer">
            <div className="about">
                <h2 className="about">About Me</h2>
                <p>Hello, I'm JJ, a software and knowledge engineering student at Kasetsart University. My main areas of
                    interest revolve around AI, machine learning, and data processing.</p>
                <p>"My life goal is to create a must-have thing for everyone, not just something nice to have."</p>
            </div>
            <div className="skill">
                <div className="skill-item">
                    <h3>Python </h3>
                    <div className={"line py " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>Java</h3>
                    <div className={"line java " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>JavaScript</h3>
                    <div className={"line js " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>C++</h3>
                    <div className={"line cpp " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>HTML</h3>
                    <div className={"line html " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>CSS</h3>
                    <div className={"line css " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>REACT</h3>
                    <div className={"line react " + isActive}></div>
                </div>
                <div className="skill-item">
                    <h3>SQL / NOSQL</h3>
                    <div className={"line sql " + isActive}></div>
                </div>
            </div>
        </div>

    </section>
}

export default About;
