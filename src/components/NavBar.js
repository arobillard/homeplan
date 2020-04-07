import React from 'react';
import NavBarIcon from './NavBarIcon';
import {navbar} from '../app-settings';
import FAB from './FAB';

class NavBar extends React.Component {

  render() {
    return (
      <header className="navbar" role="banner">
        <nav role="navigation">
          <ol className="list-group-flex gutter">
              {Object.keys(navbar.icons).map(key => (
                <li key={key} className={`gutter-1-1-4 ${navbar.icons[key].liClass}`}>
                  <NavBarIcon
                    iconData={navbar.icons[key]}
                  />
                </li>
              ))}
          </ol>
        </nav>
        <FAB
          iconType='plus'
          fabType='multi'
        />
      </header>
    )
  }

}

export default NavBar;