import React, { Component } from 'react';

class Home extends Component {
  render() {

    const containerGrid = {
      display: 'grid'
    }

    const parallxStyle = {
      background:'grey',
      columnSpan: 2,
      minHeight: 500,
      border: '1px, solid, black',
      marginLeft: 10,
      float: 'left'
    }

    const newsStyle = {
      columnSpan: 3,
      minWidth: "50%",
      minHeight: 500,
      border: '1px, solid, black',
      marginLeft: 10
    }

    return (
      <div style = {{containerGrid}}>
        <h1>This is my Home Component</h1>
        <div style = {parallxStyle}>
          This is the parallax div
        </div>
        <div style = {{newsStyle}}>This is the news div</div>
      </div>
    );
  }
}

export default Home;
