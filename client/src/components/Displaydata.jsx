import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

const Displaydata = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  if (loading) {
    return <h2>Data is loading...</h2>;
  } else {
    console.log(data);
  }

  return (
    <div>
      <h1>Display Users</h1>
      {data &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
              <p>Nationality: {user.nationality}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Displaydata;
