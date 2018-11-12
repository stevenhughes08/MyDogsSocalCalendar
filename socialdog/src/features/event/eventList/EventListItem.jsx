import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

class EventListItem extends Component {
    // THIS IS THE API TO POPULATE DOG PICS 
     state = {image:""}
     async componentDidMount() {
         await fetch("https://dog.ceo/api/breeds/image/random")
             .then(r => r.json())
             .then(o => { this.setState({image:o.message})})
     }

  
     render() {
      const {event, onEventOpen, deleteEvent} = this.props
      return (
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={this.state.image} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date}|
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
            {event.attendees && event.attendees.map((attendee) => (
              <EventListAttendee key={attendee.id} attendee={attendee}/>
            ))}
  
            </List>
          </Segment>
          <Segment clearing>
          <span>{event.description}</span>
            <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
            <Button onClick={onEventOpen(event)} as="a" color="teal" floated="right" content="View" />
          </Segment>
        </Segment.Group>
      );
    }
  }
  
  export default EventListItem;
  