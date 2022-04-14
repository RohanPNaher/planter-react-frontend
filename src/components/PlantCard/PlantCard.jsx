import { deletePlant } from "../../services/gardenService";

const PlantCard = ({ plant, garden, setGarden }) => {
  console.log(garden.id)

  const handleDelete = async () =>{
    const prunedPlant = await deletePlant(plant.id)
    setGarden(prunedPlant)
  }

  return (
    <>
      {plant.plant_name}
      <button onClick={handleDelete} type="button" className="btn danger">Delete</button>
    </>
  );
}

export default PlantCard;