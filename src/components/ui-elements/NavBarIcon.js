import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBarIcon extends React.Component {

  

  render() {
    return (
      <NavLink to={this.props.iconData.link} activeClassName="current">
        <i className="material-icons">{this.props.iconData.iconType}</i>
      </NavLink>
    )
  }

}

export default NavBarIcon;
