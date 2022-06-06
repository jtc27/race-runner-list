const racelistReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case 'ORGANISER_ID_SEARCH':
      return {
        ...state,
        organiserId: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default racelistReducer