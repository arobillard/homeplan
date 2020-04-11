import React from 'react';
import ItemGridUnit from './ItemGridUnit';

class ItemGrid extends React.Component {

  renderGrid() {
    if(this.props.gridData) {
      const gridItems = Object.keys(this.props.gridData);

      return (
        gridItems.map(key => (
          <ItemGridUnit
            key={key}
            data={this.props.gridData[key]}
          />
        ))
      )
    }
  }

  redngerGridCount() {
    if (this.props.gridData) {
      const gridItems = Object.keys(this.props.gridData);
      const gridCount = gridItems.length;
      return ( gridCount )
    }
    
  }

  render() {
    return (
      <div className="item-grid-container gutter">
        <div className="item-grid-content pad-t section-border">
          <h2 className="subtitle-1 text-center push-1-4">{this.props.title}</h2>
          <p className="subtitle-2 text-center push">{this.redngerGridCount()} {this.props.title.toLowerCase()}</p>
          <ul className="item-grid list-group pad-b">
            {this.renderGrid()}
          </ul>
        </div>
      </div>
    )
  }

}

export default ItemGrid;