import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';

  const eventsDashboard = [
    {
      id: '1',
      title: 'WALK!!!!',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Mittens',
      hostPhotoURL: '{this.state.image}',
      attendees: [
        {
          id: 'a',
          name: 'Cleo',
          photoURL: '{this.state.image}'
        },
        {
          id: 'b',
          name: 'Howie',
          photoURL: '{this.state.image}'
        }
      ]
    },
    {
      id: '2',
      title: 'Sneak out the back fence and drink from the creek',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'The Creek Louisville, Ky',
      hostedBy: 'Reaper',
      hostPhotoURL: '{this.state.image}',
      attendees: [
        {
          id: 'b',
          name: 'Garmen',
          photoURL: '{this.state.image}'
        },
        {
          id: 'a',
          name: 'Bender',
          photoURL: '{this.state.image}'
        }
      ]
    }
  ]
  

class EventDashboard extends Component {
    state = {
      events: eventsDashboard,
      isOpen: false,
      selectedEvent: null
    };
    handleFormOpen = () => {
      this.setState({
        selectedEvent: null,
        isOpen: true
      });
    };
//Handles cancels
    handleCancel = () => {
      this.setState({
        isOpen: false
      });
    };

//Update Event finds event updated and updates from the form. 
handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          //OBject.assign clones our object copies updatedEvent and copies into an empty objects and replaces the existing event.  
          return Object.assign({}, updatedEvent);
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
}
//Checks the open event to see if it is current.
    handleOpenEvent = (eventToOpen) => () => {
      this.setState({
        selectedEvent: eventToOpen,
        isOpen: true
      })
    }
    //Creates Events
    handleCreateEvent = (newEvent) => {
      newEvent.id = cuid();
      newEvent.hostPhotoURL = '/assets/user.png';
      const updatedEvents = [...this.state.events, newEvent];
      this.setState({
        events: updatedEvents,
        isOpen: false
      })
    }

    render() {
      const {selectedEvent} = this.state;
      return (
            <Grid>
            <Grid.Column width={10}>
              <EventList onEventOpen={this.handleOpenEvent} events={this.state.events} />
              </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleFormOpen} positive content="Create Event" />
                    {this.state.isOpen && 
                    <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />}
                </Grid.Column>
            </Grid>
      );
  }
    
  };
 


    


 


export default EventDashboard