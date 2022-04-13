import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as gardenService from './services/gardenService'
import GardenList from './pages/GardenList/GardenList'
import GardenDetails from './pages/GardenDetails/GardenDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [gardens, setGardens] = useState([])
  console.log(user)

  useEffect(() => {
    const fetchData = async () => {
      const data = await gardenService.getAll()
      setGardens(data)
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/gardens"
          element={user ? <GardenList gardens={gardens} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gardens/:id"
          element={user ? <GardenDetails /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
