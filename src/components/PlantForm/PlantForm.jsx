import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { addPlant } from '../../services/gardenService';

const PlantForm = ({ garden, setGarden }) => {
  const { id } = useParams()
  const [form, setForm] = useState({
    water_schedule: "Top-Up Whenever"
  })

  const addPlantToGarden = async (evt) => {
    evt.preventDefault()
    const plantedPlant = await addPlant(garden.id, form)
    setGarden(plantedPlant)
    setForm({})
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  return (
    <>
      <h3>Add a new Plant?</h3>
      <form onSubmit={addPlantToGarden}>
        <label htmlFor="plant_name">Name</label>
        <input
          value={form.plant_name ? form.plant_name : ''} onChange={handleChange} id="plant_name" name="plant_name" type="text" placeholder="Name" autoComplete="off" required
        />
        <label htmlFor="plant_description">Description</label>
        <input
          value={form.plant_description ? form.plant_description : ''} onChange={handleChange} id="plant_description" name="plant_description" type="text" placeholder="Description" autoComplete="off" required
        />
        <label htmlFor="water_schedule">Watering Schedule</label>
        <select name="water_schedule" onChange={handleChange} value={form.water_schedule ? form.water_schedule : ''} required>
          <option value="Daily">Daily</option>
          <option value="Every Other Day">Every Other Day</option>
          <option value="Every Three Days">Every Three Days</option>
          <option value="Weekly">Weekly</option>
          <option value="Top-Up Whenever">Top-Up Whenever</option>
        </select>

        <button type='submit' className='btn submit'>Submit!</button>
      </form>
    </>

  );
}

export default PlantForm;