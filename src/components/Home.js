/** @format */

import React, { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
const Home = () => {
  const [singleUser, setSingleUser] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <div className="wrapper">
      {edit ? (
        <EditUser edit={edit} singleUser={singleUser} />
      ) : (
        <AddUser edit={edit} />
      )}

      <UserList setSingleUser={setSingleUser} setEdit={setEdit} />
    </div>
  );
};

export default Home;
