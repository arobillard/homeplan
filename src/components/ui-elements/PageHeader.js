import React from 'react';

class PageHeader extends React.Component {

  render() {
    return (
      <div className="page-header gutter">
        <div className="page-header-content island section-border">
          <div className="page-header-img" style={{ backgroundImage: `url(${this.props.img})` }}>
            <img className="hidden" src={this.props.img} alt={this.props.alt} />
          </div>
          <h1 className="headline-5">{this.props.pageTitle}</h1>
        </div>
      </div>
    )
  }

}

export default PageHeader;