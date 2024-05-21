import React from 'react';

import '../styles/Intro.scss'
import RGBAnimation from './RGBAnimation';

const Intro = () => {

  return (
    <div className='intro'>
      <div className='message'>
        <h1>Hi, I'm Rylan</h1>
        <p>I am a new full stack web developer excited to continue learning and growing within the industry.</p>
      </div>
      <RGBAnimation></RGBAnimation>
    </div>
  )
}

export default Intro;