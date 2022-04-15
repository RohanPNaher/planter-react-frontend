import GardenCard from '../../components/GardenCard/GardenCard'
import styles from './GardenList.module.css'

const GardenList = ({ gardens, user }) => {
  return (
    <>
      {gardens.length ?
        <>
          <div className={styles.cardContainer}>
            {gardens.map(garden =>
              <GardenCard garden={garden} key={garden.id} user={user} />
            )}
          </div>
        </>
        :
        <p>No gardens yet</p>
      }
    </>
  );
}

export default GardenList;