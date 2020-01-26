import React from 'react';
import './App.css';
import './index.css';

class ColorPicker extends React.Component {
  render() {
    return (
      <ul>
        <button className='red'>Red</button>
        <button className='blue'>Blue</button>
        <button className='yellow'>Yellow</button>
      </ul>
    );
  }
}

export default ColorPicker;