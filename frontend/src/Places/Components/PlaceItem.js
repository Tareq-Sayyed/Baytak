// Packages
import React, { useState } from "react";
// Components & Styling
import Card from "../../Shared/Components/UIElements/Card";
import Button from "../../Shared/Components/FormElements/Button";
import Modal from "../../Shared/Components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(!showMap);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={openMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={openMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>Map</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit Place</Button>
            <Button danger>Delete Place</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
