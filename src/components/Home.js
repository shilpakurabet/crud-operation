/** @format */

import React, { useState } from "react";
import UserList from "./UserList";
import Form from "./Form";
const Home = () => {
  const [singleUser, setSingleUser] = useState("");
  const [edit, setEdit] = useState(false);

  return (
    <div className="wrapper">
      <Form edit={edit} singleUser={singleUser} />
      <UserList
        setSingleUser={setSingleUser}
        setEdit={setEdit}
        singleUser={singleUser}
      />
    </div>
  );
};

export default Home;
