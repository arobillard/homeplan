import React from 'react';

class AppBar extends React.Component {

  render() {
    return (
      <>
      <header className="appbar gutter">
        <ul className="list-group-flex w-1">
          <li>
            <button>
              <i className="icon">
                <svg><use xlinkHref="images/icons.svg#menu" /></svg>
              </i>
              <span className="icon-label hidden">Menu</span>
            </button>
          </li>
          <li className="spread-left">
            <button>
              <i className="icon">
                <svg><use xlinkHref="images/icons.svg#search" /></svg>
              </i>
              <span className="icon-label hidden">Search</span>
            </button>
          </li>
          <li className="push-l-1-1-2">
            <button>
              <i className="icon-more-menu">
                <svg><use xlinkHref="images/icons.svg#more-menu" /></svg>
              </i>
              <span className="icon-label hidden">More-Menu</span>
            </button>
          </li>
        </ul>
      </header>
      </>
    )
  }

}

export default AppBar;