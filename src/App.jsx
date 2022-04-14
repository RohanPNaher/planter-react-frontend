import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import GardenList from './pages/GardenList/GardenList'
import GardenDetails from './pages/GardenDetails/GardenDetails'
import GardenForm from './pages/Forms/GardenForm'
import Confirmation from './pages/Confirmation/Confirmation'

import * as authService from './services/authService'
import * as gardenService from './services/gardenService'

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

  const addGarden = async (gardenData) => {
    const garden = await gardenService.create(gardenData)
    setGardens([...gardens, garden])
  }

  const updateGarden = async (gardenData) => {
    const updatedGarden = await gardenService.update(gardenData)
    setGardens(gardens.map((garden) => (
      garden.id === updatedGarden.id ? updatedGarden : garden
    )))
  }

  const deleteGarden = async (id) => {
    await gardenService.deleteOne(id)
    setGardens(gardens.filter(garden => garden.id !== parseInt(id)))
  }

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
        <Route path="/" element={<Landing user={user} handleSignupOrLogin={handleSignupOrLogin} />} />
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
          element={user ? <GardenDetails user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gardens/new"
          element={user ? <GardenForm addGarden={addGarden} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gardens/:id/edit"
          element={user ? <GardenForm gardens={gardens} updateGarden={updateGarden} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gardens/:id/confirmation"
          element={user ? <Confirmation user={user} deleteGarden={deleteGarden} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
