
//this acts as a look up table for actions the fnMap or function Map
export const createReducer = (initialState, fnMap) => {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload): state
  }
}