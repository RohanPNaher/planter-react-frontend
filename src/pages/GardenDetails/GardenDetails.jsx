import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './GardenDetails.module.css'
import { getOne } from "../../services/gardenService";

import GardenActions from "../../components/GardenActions/GardenActions";
import Plants from "../../components/PlantsList/PlantsList";

const GardenDetails = ({ user }) => {
  const { id } = useParams()
  const [garden, setGarden] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setGarden(data.garden)
    }
    fetchOne()
  }, [id])

  if (!garden) return <h1>Loading</h1>

  return (
    <>
      <section className={styles.gardenContainer}>
        <div className={`${styles.border} ${garden.plants.length && styles.borderBottom}`}>
          <div className={styles.gardenDetails}>
            <h1 className={styles.gardenTitle}>{garden.name}</h1>
            <h3 className={styles.gardentype}>An {garden.garden_type} Garden</h3>
            <p className={styles.gardenDesc}>{garden.garden_description}</p>
            <GardenActions garden={garden} user={user} />
          </div>
          <div className={styles.plantsContainer}>
            <Plants
              garden={garden}
              user={user}
              setGarden={setGarden}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default GardenDetails;