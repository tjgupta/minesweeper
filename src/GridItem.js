import React, { Component } from 'react';
import './GridItem.css';

class GridItem extends Component {
  render() {
    return <div className="grid-item">{this.props.item.bomb ? 'B' : ''}</div>;
  }
}

export default GridItem;
