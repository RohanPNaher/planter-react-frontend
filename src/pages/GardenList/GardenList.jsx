import GardenCard from '../../components/GardenCard/GardenCard'


const GardenList = ({ gardens }) => {
  return (
    <>
      <h1>Hello. This is a list of all the gardens.</h1>
      {gardens.length ?
        <>
          {gardens.map(garden =>
            <p key={garden.id}>{garden.name}</p>
          )}
        </>
        :
        <p>No gardens yet</p>
      }
    </>
  );
}

export default GardenList;