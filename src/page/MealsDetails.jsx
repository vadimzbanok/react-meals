import { useParams, Link } from "react-router-dom";

const MealsDetails = () => {
  const { id } = useParams(); //destructuring id from useParams
  return <div>MealsDetails für {id}
  <button className="btn btn-primary">
    <br />
    <Link to="/meals">Back</Link>
  </button>
  </div>
};
export default MealsDetails;
