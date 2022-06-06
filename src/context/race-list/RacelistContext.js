import { createContext, useReducer } from "react";
import racelistReducer from "./RacelistReducer";

const RacelistContext = createContext()

export const RacelistProvider = ({children}) => {
  const initialState = {
    users: [],
    organiserId: [],
  }

  const [state, dispatch] = useReducer(racelistReducer, initialState)

  const fetchUsers = async () => {
    const response = await fetch(`api/startlistentries`)

    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  const searchUsers = (text) => {
    dispatch({
      type: 'ORGANISER_ID_SEARCH',
      payload: text
    })
  }

  return <RacelistContext.Provider value={{
    users: state.users,
    organiserId: state.organiserId,
    fetchUsers,
    searchUsers
  }}>
    {children}
  </RacelistContext.Provider>
}

export default RacelistContext