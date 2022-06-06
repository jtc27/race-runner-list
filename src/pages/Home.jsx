import React from 'react'

import UserResults from '../components/users/UserResults'
import UserSearchBar from '../components/users/OrganiserIdSearch'

function Home() {
  return (
    <>
    <UserSearchBar/>
    <UserResults />
    </>
  )
}

export default Home