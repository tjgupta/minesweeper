import React, { Component } from 'react';
import GridItem from './GridItem';
import './GridRow.css';

class GridRow extends Component {
  render() {
    const items = this.props.row.map((item) => {
      return <GridItem item={item} />;
    });
    return <div className="grid-row">{items}</div>;
  }
}

export default GridRow;
