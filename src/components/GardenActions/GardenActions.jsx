import { useNavigate } from "react-router-dom";

const GardenActions = ({ garden, user }) => {
  const navigate = useNavigate()
  return (
    garden.profile_id === user.id &&
    <div className="garden-actions">
      <button className="btn warn" onClick={() => navigate(`/gardens/${garden.id}/edit`, { state: garden })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/gardens/${garden.id}/confirmation`, { state: garden })}>Delete</button>
    </div>
  );
}

export default GardenActions;