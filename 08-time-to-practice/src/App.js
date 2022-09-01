import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (name, age) => {
        setUsersList((prevState) => {
            let id = Math.random().toString();
            return [...prevState, {id, name, age}]
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
