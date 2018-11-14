import React from 'react';
import { Component } from 'react-router-dom';


class dogPics extends Component {
 // THIS IS THE API TO POPULATE DOG PICS 
 state = {image:""}
 async componentDidMount() {
     await fetch("https://dog.ceo/api/breeds/image/random")
         .then(r => r.json())
         .then(o => { this.setState({image:o.message})})
 }
}

export default dogPics