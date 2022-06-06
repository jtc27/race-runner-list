
import { useEffect, useContext } from "react"
import RacelistContext from "../../context/race-list/RacelistContext"

function UserResults() {
  const {users, organiserId, fetchUsers} = useContext(RacelistContext)
  // Bring out necessary values from global context
  
  useEffect(() => {
    fetchUsers()
  }, [])

  
  return (
    <div> Showing results for Organiser ID: {organiserId} <br></br><br></br>
    {users.map((user) => (

      (user.organiserId === parseInt(organiserId)) && 
      (<><b>{user.lastName}, {user.firstName}</b><br></br> 
      race: {user.eventTitle}
      <br></br>
      race date: {user.raceStartDate}
      <br></br>
      ticket price: {user.ticketPrice.originalValue}
      <br></br>
      <br></br>
      </>
      )
      
    ))}  
    </div>
  )
}

export default UserResults