import React from 'react';

class NavDrawerScrim extends React.Component {

  render() {
    return (

      <div onClick={this.props.closeNavDrawer}  className="mdc-drawer-scrim"></div>

    )
  }

}

export default NavDrawerScrim;