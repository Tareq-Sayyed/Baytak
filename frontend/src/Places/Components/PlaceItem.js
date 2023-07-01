// Packages

// Components & Styling
import Card from "../../Shared/Components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-temm__actions">
          <button>View On Map</button>
          <button>Edit Place</button>
          <button>Delete Place</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
