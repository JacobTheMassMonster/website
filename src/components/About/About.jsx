import React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import './About.css';

const About = (props) => {
  Typist.PropTypes = { show: false };

  return (
    <div className='about'>
      <Typist>
        <h1>Welcome</h1>
        <hr/>
      </Typist>
      <TypistLoop interval={1000}>
        {[
          'Here is Charles Chan \'s space',
          'Charles Chan is a web developer'
        ].map(text => <Typist key={text} startDelay={1000}><p>{text}</p></Typist>)}
      </TypistLoop>
    </div >


  );
};

export default About;
