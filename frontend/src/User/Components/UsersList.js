import "./UsersList.css";
import UsersItem from "./UsersItem";
import Card from "../../Shared/Components/UIElements/Card";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found...</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
            id = {user.id}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
