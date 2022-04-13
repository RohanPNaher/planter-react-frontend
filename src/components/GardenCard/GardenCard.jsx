import { Link } from "react-router-dom";

const Garden = ( {garden} ) => {
  return (
    <>
      <Link
        to={`/gardens/${garden.id}`}
        state={{garden}}
      >
        View {garden.name}
      </Link>
    </>
  );
}

export default Garden;