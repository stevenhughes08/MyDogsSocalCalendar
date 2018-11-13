import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSideBar';
//This is the event detail page. This is a stateless functional component.

const event = {
  
    id: "1",
    title: "EAT ALL of the leftover Halloween Candy",
    date: "2018-11-2",
    category: "dining",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Louisville, KY",
    venue: "The Pantry",
    hostedBy: "Ira Stinkybutt",
    hostPhotoURL: "{this.state.image}",
    attendees: [
      {
        id: "a",
        name: "Cleo",
        photoURL: "{this.state.image}"
      },
      {
        id: "b",
        name: "Howie",
        photoURL: "{this.state.image}"
      }
    ]
}

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage
