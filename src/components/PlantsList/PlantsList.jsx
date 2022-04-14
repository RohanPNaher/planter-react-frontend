import PlantForm from "../PlantForm/PlantForm";
import PlantCard from "../PlantCard/PlantCard";

const Plants = ({ user, garden, setGarden }) => {
  return (
    <>
      <section className="plants-list">
        <h2 className="plants-title">Plants</h2>
        {garden.plants.length ?
          <>
            {garden.plants.map(plant => 
              <PlantCard key={plant.id} plant={plant} garden={garden} setGarden={setGarden} />
            )}
          </>
          :
          <div>There are no plants in this garden!</div>
        }
        {user.id === garden.profile_id && <PlantForm garden={garden} setGarden={setGarden} />}
      </section>
    </>
  );
}

export default Plants;