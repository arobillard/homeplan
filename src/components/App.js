import React from 'react';
import { data } from '../starter-data';
import NavBar from './NavBar';

class App extends React.Component {

  state = {
    users: {},
    rooms: {},
    items: {},
    tasks: {}
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    Object.keys(data).map(key => this.setState({ [key]: data[key] }))
  }

  render() {
    return (
      <>
        <NavBar />
      </>
    )
  }
}

export default App;