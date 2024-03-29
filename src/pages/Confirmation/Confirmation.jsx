import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = 'gardens'

  const handleDelete = () => {
    props.deleteGarden && props.deleteGarden(id)
    navigate(`/${resource}`)
  }

  return (
    <>
      <div className="conf-header">
        <h1>Confirm Delete?</h1>
      </div>
      <section className="conf">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/${resource}/${id}`}>Go Back</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Delete</button>
      </section>
    </>
  );
}

export default Confirmation;