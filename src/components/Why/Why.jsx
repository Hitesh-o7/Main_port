import React from 'react';
import './Why.scss';

const Why = () => {
    const content = [
        {
          number: 1,
          title: 'Efficiency',
          text: 'I focus on delivering high-quality designs and solutions in a short timeframe without compromising on quality.',
        },
        {
          number: 2,
          title: 'Creativity',
          text: 'My designs are innovative and unique, combining aesthetics with functionality to stand out in any project.',
        },
        {
          number: 3,
          title: 'Technical Skills',
          text: 'I bring a versatile skill set, including expertise in Next.js, Framer Motion, GSAP, Figma, Canva, and programming languages like Python, C, C++, and Java.',
        },

      ];


  return (
    <div className="why-container">
      <div className="left-section">
        <div className="sticky-container">
          <div className="sticky-text">Why Work With Me</div>
        </div>
      </div>

      <div className="right-section">
        {content.map((item) => (
          <div className="content-block" key={item.number}>
            <div className="number">{item.number}.</div>
            <div className="text">
              <h3>{item.title}</h3>
              <hr />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
