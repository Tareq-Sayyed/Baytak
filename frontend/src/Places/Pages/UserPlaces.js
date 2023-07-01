// Packages
import { useParams } from "react-router-dom";

// Components & Styling
import PlaceList from "../Components/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/1200px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  }
];

const UserPlaces = () => {
  const userId = useParams().uid;
  console.log(userId);
  const loaded_places = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loaded_places} />;
};

export default UserPlaces;
