import { Link } from "react-router-dom";
import styles from './GardenCard.module.css'

const Garden = ({ garden, user }) => {
  return (
    <div>
      <Link
        to={`/gardens/${garden.id}`}
        className={styles.card}
      >
        <div className={styles.cardContent}>
          <div className={styles.greenBorder}>
            <div className={styles.cardImgContainer}>
              <img className={styles.cardImg} src='https://i.imgur.com/jzd73T2.png' alt='Garden' />
            </div>
            <h2 className={styles.cardTitle}>{user.name}'s {garden.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Garden;