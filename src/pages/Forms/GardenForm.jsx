import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getOne } from '../../services/gardenService';

import GardenInput from './GardenInput';

const GardenForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    garden_type: "Outdoors"
  })

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    id ? props.updateGarden(form) : props.addGarden(form)
    navigate(`/gardens`)
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.garden.id,
        name: data.garden.name,
        garden_description: data.garden.garden_description,
        garden_type: data.garden.garden_type
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div>
        {id ?
          <h1>Edit Garden</h1>
          :
          <h1>Add Garden</h1>
        }
      </div>

      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <GardenInput form={form} handleChange={handleChange} />
          <button type='submit' className='btn submit'>Submit!</button>
        </form>
      </section>
    </>
  );
}

export default GardenForm;
