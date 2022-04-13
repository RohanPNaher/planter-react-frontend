import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/gardens`

async function create(garden) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type:': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(garden)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function getAll(){
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { create, getAll }