import React from 'react';
import './paragraph.css';

const Paragraph = () => {
  return (
    <React.Fragment>
      <h2>I should not be red.</h2>
      <p>Some other stuff here, i should be blue according to paragraph.css</p>
    </React.Fragment>
  )
}
export default Paragraph;