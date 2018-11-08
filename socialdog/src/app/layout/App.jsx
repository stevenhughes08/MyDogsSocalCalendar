import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';


class App extends Component {
// THIS IS THE API TO POPULATE DOG PICS 
     state = {image:""}
     async componentDidMount() {
         await fetch("https://dog.ceo/api/breeds/image/random")
             .then(r => r.json())
             .then(o => { this.setState({image:o.message})})
     }

  render() {
    return (
      <div>
      <NavBar/>
        <Container className="main">
        <EventDashboard />
      </Container>
      </div>
    );
  }
}

export default App;
