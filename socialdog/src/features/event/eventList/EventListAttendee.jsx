import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';



class EventListAttendee extends Component {

    // THIS IS THE API TO POPULATE DOG PICS 
     state = {image:""}
     async componentDidMount() {
         await fetch("https://dog.ceo/api/breeds/image/random")
             .then(r => r.json())
             .then(o => { this.setState({image:o.message})})
     }
    
    render () {

        
        
        return (
            <div>
                
                <Image as='a' size='mini' circular src={this.state.image} />
            </div>
        )
    }
}

export default EventListAttendee