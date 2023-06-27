import './UsersList.css';
import UsersItem from './UsersItem';
const UsersList = (props) => {
    if(props.items.length === 0){
        return(
            <div className="center">
                <h2>No users found...</h2>
            </div>
        );
    }
    return(
        <ul className='users-list'>
            {props.items.map(user => {
                    return(
                        <UsersItem 
                        key = {user.id} 
                        image = {user.image} 
                        name = {user.name}  
                        placeCount = {user.places}
                    />
                    );
            })}
        </ul>
    );
}
 
export default UsersList;