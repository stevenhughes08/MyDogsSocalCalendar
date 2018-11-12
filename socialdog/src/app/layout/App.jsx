import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailPage from '../../features/user/UserDetailedPage.jsx/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testArea/testComponent';


class App extends Component {

  render() {
    return (
      <div>
        <switch>
        {/**Defaults to the home page */}
        <Route exact path="/" component={HomePage}/>
        </switch>
       {/** the /(.+ makes the router look for anything in the switch ) */}
      <Route path="/(.+)" render={() => (

        <div>
        <NavBar/>
          <Container className="main">
          <switch>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/test' component={TestComponent}/>
          <Route path='/event/:id' component={EventDetailedPage}/>
          <Route path='/people' component={PeopleDashboard}/>
          <Route path='/profile/:id' component={UserDetailPage}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/createEvent' component={EventForm}/>
          </switch>
        </Container>
        </div>

      )}
      
      />

        
      </div>
    );
  }
}

export default App;
