import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <section className="garden-container">
        <div className="garden-details">
          <h1>{garden.name}</h1>
          <h2>An {garden.garden_type} Garden</h2>
          <p>{garden.garden_description}</p>
          <GardenActions garden={garden} user={user}/>
        </div>
        <div className="plants-container">
          <Plants 
            garden={garden}
            user={user}
            setGarden={setGarden}
          />
        </div>
      </section>
    </>
  );
}

export default GardenDetails;