import React from 'react';

class ItemGridUnit extends React.Component {

  render() {
    return (
      <div className="item-grid-unit island">
        <div className="item-grid-unit-img" style={{ backgroundImage: `url(${this.props.img})` }}>
          <img className="hidden" src={this.props.img} alt={this.props.alt} />
        </div>
        <h3 className="subtitle-1">{this.props.data.name}</h3>
      </div>
    )
  }

}

export default ItemGridUnit;