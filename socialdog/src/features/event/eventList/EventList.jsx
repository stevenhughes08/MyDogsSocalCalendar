import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    //A container for eventListItems. 
    render () {
        const {events, onEventOpen, deleteEvent} = this.props;
        return (
            <div>
                <h1>Event List</h1>
                {events.map((event) => (
                    <EventListItem key={event.id} 
                        event={event} 
                        onEventOpen={onEventOpen} 
                        deleteEvent={deleteEvent} 
                        />/**EventEdits handler */
                ))}
            </div>
        )
    }
}

export default EventList;