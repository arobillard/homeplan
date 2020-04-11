import React from 'react';

class AppBar extends React.Component {

  render() {
    return (
      <header className="appbar gutter">
        <ul className="list-group-flex w-1">
          <li>
            <button onClick={this.props.openNavDrawer}>
                <i className="material-icons">menu</i>
            </button>
          </li>
          <li className="spread-left">
            <button>
                <i className="material-icons">search</i>
            </button>
          </li>
          <li className="push-l">
            <button>
                <i className="material-icons">more_vert</i>
            </button>
          </li>
        </ul>
      </header>
    )
  }

}

export default AppBar;