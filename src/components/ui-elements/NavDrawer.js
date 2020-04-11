import React from 'react';

class NavDrawer extends React.Component {

  render() {
    return (
      <aside className="mdc-drawer">
        <div className="mdc-drawer-header island">
            <div className="mdc-drawer-header-img" style={{ backgroundImage: `url(${this.props.userData.img})` }}>
            <img className="hidden" src={this.props.userData.img} alt={this.props.userData.name} />
          </div>
          <h2 className="mdc-drawer-header-title headline-6 spread-top">{this.props.userData.name}</h2>
          <a className="mdc-drawer-header-email body-2" href={`mailto:${this.props.userData.email}`}>{this.props.userData.email}</a>
        </div>
        <div className="mdc-drawer-content">
          <nav className="mdc-list">
            <button onClick={this.props.logOut} className="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <i className="material-icons mdc-list-item-graphic" aria-hidden="true">cancel</i>
              <span className="mdc-list-item-text">Log Out</span>
            </button>
          </nav>
        </div>
      </aside>
    )
  }

}

export default NavDrawer;