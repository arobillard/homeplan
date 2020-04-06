import React from 'react';

class FAB extends React.Component {

  state = {
    open: false
  }

  fabClick = () => {
    if (this.state.open === true) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
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
                <svg><use xlinkHref={`/images/icons.svg#${this.props.iconType}`} /></svg>
              </i>
            </button>
          </li>
          <li>
            <button className="fab-btn fab-btn-secondary">
              <i className="icon">
                <svg><use xlinkHref={`/images/icons.svg#${this.props.iconType}`} /></svg>
              </i>
            </button>
          </li>
          <li>
            <button className="fab-btn fab-btn-secondary">
              <i className="icon">
                <svg><use xlinkHref={`/images/icons.svg#${this.props.iconType}`} /></svg>
              </i>
            </button>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <div className={`fab${this.state.open ? ' open' : ''}`}>
        <button className="fab-btn fab-btn-main" onClick={this.fabClick}>
          <i className="icon">
            <svg><use xlinkHref={`/images/icons.svg#${this.props.iconType}`} /></svg>
          </i>
        </button>
        {this.includeOptions()}
      </div>
    )
  }

}

export default FAB;