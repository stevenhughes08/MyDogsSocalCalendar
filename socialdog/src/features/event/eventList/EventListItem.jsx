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


    render () {


        return (
                <Segment.Group>
                   <Segment>
                     <Item.Group>
                       <Item>{/**The below code calls the random fetched images */}
                         <Item.Image size="tiny" circular src={this.state.image} />
                         <Item.Content>
                           <Item.Header as="a">Event Title</Item.Header>
                           <Item.Description>
                             Hosted by <a>{this.props.event.hostedBy}</a>
                           </Item.Description>
                         </Item.Content>
                       </Item>
                     </Item.Group>
                   </Segment>
                   <Segment>
                     <span>
                       <Icon name="clock" /> {this.props.event.date} |
                       <Icon name="marker" /> {this.props.venue}
                     </span>
                   </Segment>
                   <Segment secondary>
                     <List horizontal>
                       {/* todo: attendees go here */}
                       <EventListAttendee/>
                     </List>
                   </Segment>
                   <Segment clearing>
                     <Button as="a" color="teal" floated="right" content="View" />
                   </Segment>
                 </Segment.Group> 
        )
    }
}

export default EventListItem