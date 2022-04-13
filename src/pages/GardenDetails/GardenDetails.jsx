import { useLocation, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getOne } from "../../services/gardenService";

const GardenDetails = ({user }) => {
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
      {garden.name}
      {/* {garden.plants[0].plant_name} */}
    </>
  );
}
 
export default GardenDetails;