import React from 'react';

class AppBar extends React.Component {

  render() {
    return (
      <>
      <header className="appbar gutter">
        <ul className="list-group-flex">
          <li>
            <button>
              <i className="icon">
                <svg><use xlinkHref="images/icons.svg#menu" /></svg>
              </i>
              <span className="icon-label hidden">Menu</span>
            </button>
          </li>
        </ul>
      </header>
      </>
    )
  }

}

export default AppBar;