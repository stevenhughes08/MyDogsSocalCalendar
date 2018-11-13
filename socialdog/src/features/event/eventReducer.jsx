import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants'


const initialState = [
    {
      id: '1',
      title: 'EAT ALL of the leftover Halloween Candy',
      date: '2018-11-2',
      category: 'dining',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'Louisville, KY',
      venue: "The Pantry",
      hostedBy: 'Ira Stinkybutt',
      hostPhotoURL: '{this.state.image}',
      attendees: [
        {
          id: 'a',
          name: 'Cleo',
          photoURL: '{this.state.image}'
        },
        {
          id: 'b',
          name: 'Howie',
          photoURL: '{this.state.image}'
        }
      ]
    },
    {
      id: '2',
      title: 'Sneak out the back fence and drink from the creek',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'The Creek Louisville, Ky',
      hostedBy: 'Reaper',
      hostPhotoURL: '{this.state.image}',
      attendees: [
        {
          id: 'b',
          name: 'Garmen',
          photoURL: '{this.state.image}'
        },
        {
          id: 'a',
          name: 'Bender',
          photoURL: '{this.state.image}'
        }
      ]
    }
  ];

  export const createEvent = (state, playload) => {
      return [...state, Object.assign({}, playload.event)]
    }

    export const updateEvent = (state, playload) => {
        return [
            ...state.filter(event => event.id !== playload.event.id), 
            Object.assign({}, playload.event)
        ]
    }

    export const deleteEvent = (state, payload) => {
        return [...state.filter(event => event.id !== payload.eventid)]
    }

    export default createReducer(initialState, {
        [CREATE_EVENT]: createEvent,
        [UPDATE_EVENT]: updateEvent,
        [DELETE_EVENT]: deleteEvent
    }) 