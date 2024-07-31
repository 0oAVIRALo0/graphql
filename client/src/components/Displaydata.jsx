import React, { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import {
  QUERY_ALL_USERS,
  QUERY_ALL_MOVIES,
  QUERY_SINGLE_MOVIE,
} from "../graphql/queries";

const Displaydata = () => {
  const [searchedmovie, setSearchedmovie] = useState("");

  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: searchedMovieData, error: searchedMovieError }] =
    useLazyQuery(QUERY_SINGLE_MOVIE);

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

      <div>
        <input
          type="text"
          placeholder="Enter a movie"
          value={movie}
          onChange={(event) => setSearchedmovie(event.target.value)}
        />
        <button onClick={fetchMovie}>Search</button>
      </div>
    </div>
  );
};

export default Displaydata;
