import PlantForm from "../PlantForm/PlantForm";
import PlantCard from "../PlantCard/PlantCard";
import styles from './PlantsList.module.css'

const Plants = ({ user, garden, setGarden }) => {
  return (
    <>
      <section className={styles.plantsList}>
        <h1 className={styles.plantsTitle}>Plants</h1>
        {garden.plants.length ?
          <div className={styles.cardContainer}>
            {garden.plants.map(plant => 
              <PlantCard key={plant.id} plant={plant} garden={garden} setGarden={setGarden} user={user} />
            )}
          </div>
          :
          <div>There are no plants in this garden!</div>
        }
        {user.id === garden.profile_id && <PlantForm garden={garden} setGarden={setGarden} />}
      </section>
    </>
  );
}

export default Plants;