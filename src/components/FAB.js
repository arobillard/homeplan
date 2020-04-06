import React from 'react';

class FAB extends React.Component {

  fabClick = () => {
    const fabType = this.props.fabType;
    const fab = document.querySelector('.fab');

    if (fabType === 'multi') {
      // fab.classList.toggle('open');
      console.log(fab);
    }
  }

  includeOptions = () => {
    const fabType = this.props.fabType;

    if(fabType === 'multi') {
      return (
        <ul className="fab-btn-options">
          <li>
            <button className="fab-btn fab-btn-secondary">
              <i className="icon">
                <svg><use xlinkHref={`images/icons.svg#${this.props.iconType}`} /></svg>
              </i>
            </button>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <div className="fab">
        <button className="fab-btn fab-btn-main" onClick={this.fabClick()}>
          <i className="icon">
            <svg><use xlinkHref={`images/icons.svg#${this.props.iconType}`} /></svg>
          </i>
        </button>
        {this.includeOptions()}
      </div>
    )
  }

}

export default FAB;