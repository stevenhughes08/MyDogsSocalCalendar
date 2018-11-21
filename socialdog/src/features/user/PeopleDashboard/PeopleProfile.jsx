import React, { Component } from 'react';


class PeopleProfile extends Component {
    // THIS IS THE API TO POPULATE DOG PICS 
    constructor() {
        super();
        this.state = {
            user: []
        };
    }
    
    async componentDidMount() {
       this.getItems();
    }

    getItems() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(r => r.json())
        .then(o =>{
            this.setState({'user': o})
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error)
        });
    }
    render () {
        console.log(this.state.user);
        
        return (
            <div>
               <ul>
                   <li>{this.state.user.name}</li>
                   <li>{this.state.user.email}</li>
               </ul>
            </div>
        )
    }
}

export default PeopleProfile;