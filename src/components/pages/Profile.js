import React from 'react';
import PageHeader from '../ui-elements/PageHeader';
import ItemGrid from '../ui-elements/ItemGrid';

class Profile extends React.Component {

  render() {
    return (
      <div className="page-content">
        <PageHeader
          img={this.props.userData.img}
          alt={this.props.userData.name}
          pageTitle={this.props.userData.fName}
        />
        <ItemGrid
          gridData={this.props.userData.homes}
          title="Homes"
        />
      </div>
    )
  }

}

export default Profile;