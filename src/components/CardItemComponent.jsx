import { Link } from "react-router-dom";
const CardItemComponent = ({ food }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={food.strMealThumb} alt={food.strMeal} />
      </figure>
      <div className="card-body">
        <Link to={`/meals/${food.idMeal}`}>
          <h2 className="card-title">{food.strMeal}</h2>
        </Link>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{food.strCategory}</div>
          <div className="badge badge-outline">{food.strArea}</div>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
