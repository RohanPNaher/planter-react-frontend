import styles from './GardenForm.module.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getOne } from '../../services/gardenService';

import GardenInput from './GardenInput';

const GardenForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    garden_type: "Outdoor"
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
      <div className={styles.container}>
        <div className={styles.brownBorder}>
          <div className={styles.greenBorder}>
            <div>
              {id ?
                <h1 className={styles.h1}>Edit Garden</h1>
                :
                <h1 className={styles.h1}>Add Garden</h1>
              }
            </div>

            <section className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <GardenInput form={form} handleChange={handleChange} />
                <button type='submit' className='btn btn-primary submit'>Submit!</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default GardenForm;
