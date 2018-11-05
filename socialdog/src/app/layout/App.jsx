import React, { Component } from 'react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>My Dog's Social calendar</h1>
        <EventDashboard />
      </div>
    );
  }
}

export default App;
