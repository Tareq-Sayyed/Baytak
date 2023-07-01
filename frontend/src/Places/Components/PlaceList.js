// Packages

// Components & Styling
import Card from "../../Shared/Components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  return (
    <div>
      {!props.items && (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <button>Share Place</button>
          </Card>
        </div>
      )}
      <ul className="place-list">
        {props.items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        ))}
      </ul>
    </div>
  );
};


export default PlaceList;


