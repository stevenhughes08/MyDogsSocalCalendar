import React from 'react';


class PeopleDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            people: result.people
          });
        },
        //This is the error handling portion. 
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, people } = this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
      return <div>Loading...</div>;
    }else{
      return (
        <ul>
          {people.map(person => (
          <li key={person.name}>
          {person.name} {person.email} {person.address} 
          </li>
          ))}
        </ul>
      );
    }
  
  }
}


export default PeopleDashboard