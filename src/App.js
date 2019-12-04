import React from 'react';
import './app.css';
import Paragraph from './Paragraph';

const App = () => {
  return (
    <div>
      <h2>I should be red, according to app.css</h2>
      <p>Some stuff here. I should be the default color, not blue.</p>
      <Paragraph />
    </div>
  )
}
export default App;