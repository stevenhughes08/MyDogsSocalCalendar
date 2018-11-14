const sampleData = {
    events: [
      {
        id: '1',
        title: 'Eat the leftover Halloween Candy',
        date: '2018-11-01T18:00:00',
        category: 'food',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'Louisville Ky',
        venue: 'The Pantry',
        venueLatLng: {
          lat: 40.7484405,
          lng: -73.98566440000002
        },
        hostedBy: 'Ira StinkyButt',
        hostPhotoURL: '../../assets/IraPic.jpeg',
        attendees: [
          {
            id: 'a',
            name: 'Bob',
            photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
          },
          {
            id: 'b',
            name: 'Tom',
            photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
          }
        ]
      },
      {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-18T14:00:00',
        category: 'drinks',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        venueLatLng: {
          lat: 51.5118074,
          lng: -0.12300089999996544
        },
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
          {
            id: 'a',
            name: 'Bob',
            photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
          },
          {
            id: 'b',
            name: 'Tom',
            photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
          }
        ]
      }
    ]
  };
  
  export default sampleData;