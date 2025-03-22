import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch("/api/user")
      .then(res => res.json())
      .then(json => setUser(json))
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user.map((data, index) => (
        <div key={index} style={{ border: "1px solid gray", width: "500px", marginBottom: "10px" }}>
          <h1>Name: {data.name}</h1>
          <h1>Username: {data.username}</h1>
          <h1>Email: {data.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;

