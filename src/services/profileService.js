import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    // this gives a CORS disallow (redirect, preflight?, Status code: 308)
    // headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getSingleProfile(id) {
  const res = await fetch(`${BASE_URL}/api/profiles/${id}`, {
    // headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export { getAllProfiles }
