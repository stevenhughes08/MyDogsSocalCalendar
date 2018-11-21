import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import PeopleProfile from './PeopleProfile';

class PeopleDashboard extends Component {
  render () {
    return (
      <List>
      <List.Item>
        <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/women/42.jpg'/>
      </List.Item>
     <List.Item>
       <PeopleProfile />
     </List.Item>
     </List>
    )
  }
}

export default PeopleDashboard