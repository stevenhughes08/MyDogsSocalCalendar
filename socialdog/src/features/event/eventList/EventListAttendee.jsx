import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'


class EventListAttendee extends Component {
    render () {
        return (
            <div>
                <Image as='a' size='mini' circular src='https://dog.ceo/api/breeds/image/random' />
            </div>
        )
    }
}

export default EventListAttendee