import React from 'react';

class Icon extends React.Component {

  render() {
    return (
        <a className="icon-link" href={this.props.iconData.link}>
          <i className={`icon ${this.props.iconData.iconClass}`}>
            <svg><use xlinkHref={`images/icons.svg#${this.props.iconData.iconType}`} /></svg>
          </i>
          <span className={`icon-label ${this.props.iconData.labelClass}`}>{this.props.iconData.label}</span>
        </a>
    )
  }

}

export default Icon;
