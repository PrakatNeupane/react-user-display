import { useState } from 'react';
import './App.css';
import { AddUser } from './component/Users/AddUser';
import { UsersList } from './component/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
