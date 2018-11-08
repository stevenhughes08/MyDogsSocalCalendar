import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';

  const eventsDashboard = [
    {
      id: '1',
      title: 'WALK!!!!',
      date: '2018-03-27T11:00:00+00:00',
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
      date: '2018-03-28T14:00:00+00:00',
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
    render () {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={eventsDashboard}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content="CreateEvent"/>
                    <EventForm/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard