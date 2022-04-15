import { useNavigate } from "react-router-dom";
import styles from './GardenActions.module.css'

const GardenActions = ({ garden, user }) => {
  const navigate = useNavigate()
  return (
    garden.profile_id === user.id &&
    <div className={styles.gardenActions}>
      <button className="btn btn-warning" onClick={() => navigate(`/gardens/${garden.id}/edit`, { state: garden })}>Edit</button>
      <button className="btn btn-danger" onClick={() => navigate(`/gardens/${garden.id}/confirmation`, { state: garden })}>Delete</button>
    </div>
  );
}

export default GardenActions;