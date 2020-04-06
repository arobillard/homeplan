import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBarIcon extends React.Component {

  

  render() {
    return (
      <NavLink className="icon-link" to={this.props.iconData.link} activeClassName="current">
        <i className={`icon ${this.props.iconData.iconClass}`}>
          <svg><use xlinkHref={`/images/icons.svg#${this.props.iconData.iconType}`} /></svg>
        </i>
        <span className={`icon-label ${this.props.iconData.labelClass}`}>{this.props.iconData.label}</span>
      </NavLink>
    )
  }

}

export default NavBarIcon;
