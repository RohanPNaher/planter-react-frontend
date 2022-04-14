import { deletePlant, getOne, waterPlant } from "../../services/gardenService";

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
      {plant.plant_name}
      {`${plant.is_watered}`}
      {user.id === garden.profile_id && <>
        {!plant.is_watered && <button onClick={handleWater} type="button" className="btn danger">Water Plant</button>}
        <button onClick={handleDelete} type="button" className="btn danger">Delete</button>
      </>}
    </>
  );
}

export default PlantCard;