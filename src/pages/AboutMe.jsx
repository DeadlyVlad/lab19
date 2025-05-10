import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="page">
      <h1>Про мене</h1>
      <p>Я Бредак Владислав Євгенiйович, навчаюсь в НУБIП</p>
      <ul>
      <a href="https://github.com/DeadlyVlad" target="_blank" rel="noopener noreferrer">
        <li>GitHab: https://github.com/DeadlyVlad</li>
      </a>
      </ul>
    </div>
  );
};

export default AboutMe;
