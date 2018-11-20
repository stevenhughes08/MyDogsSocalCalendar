import {createReducer } from '../../app/common/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT} from './eventConstants';

const initialState = [
    {
      id: '1',
      title: 'WALK!!!!',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Mittens',
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

  export const createEvent = (state, payload) => {
      return [...state, Object.assign({}, payload.event)]
  }

  export const updateEvent = (state, payload) => {
      return [
          ...state.filter(event => event.id !== payload.event.id),
          Object.assign({}, payload.event)
      ]
  }

  export const deleteEvent = (state, payload) => {
      return [...state.filter(event => event.id !== payload.eventId)]
  }

  export default createReducer(initialState, {
      [CREATE_EVENT]: createEvent,
      [UPDATE_EVENT]: updateEvent,
      [DELETE_EVENT]: deleteEvent
  })