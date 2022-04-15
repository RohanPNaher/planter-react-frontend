import { deletePlant, getOne, waterPlant } from "../../services/gardenService";
import styles from './PlantCard.module.css'

const PlantCard = ({ plant, garden, setGarden, user }) => {
  console.log(garden.id)

  const handleDelete = async () => {
    await deletePlant(plant.id)
    const data = await getOne(garden.id)
    setGarden(data.garden)
  }

  const handleWater = async () => {
    let water
    if (!plant.is_watered) {
      water = { is_watered: true, id: plant.id }
    }
    await waterPlant(water)
    const data = await getOne(garden.id)
    setGarden(data.garden)
  }

  return (
    <>
      <div className={styles.cardContent}>
        <div className={plant.is_watered ? `${styles.wateredBorder}` : `${styles.dryBorder}`}>
          <div className={styles.cardImgContainer}>
            <img className={styles.cardImg} src='https://i.imgur.com/jzd73T2.png' alt='Garden' />
          </div>
          <h2 className={styles.cardTitle}>{plant.plant_name}</h2>
          <p className={styles.desc}>{plant.plant_description}</p>
          {user.id === garden.profile_id && <div className={styles.buttonsContainers}>
            {!plant.is_watered && <button onClick={handleWater} type="button" className="btn btn-primary">Water Plant</button>}
            <button onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
          </div>}
        </div>
      </div>
      {/* {`${plant.is_watered}`} */}
    </>
  );
}

export default PlantCard;