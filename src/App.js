import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./components/layout/Navbar";

import Home from './pages/Home';
import {RacelistProvider} from './context/race-list/RacelistContext'

function App() {
  return (
    <RacelistProvider>
      <Router>
      
      <Navbar/>

      <Home/>

      </Router>
    
    </RacelistProvider>
  )
}

export default App;