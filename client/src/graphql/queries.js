import { gql } from "@apollo/client";

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

const QUERY_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const QUERY_SINGLE_MOVIE = gql`
  query getMovie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
      isInTheaters
    }
  }
, QUERY_SINGLE_MOVIE`;

export { QUERY_ALL_USERS, QUERY_ALL_MOVIES, QUERY_SINGLE_MOVIE };
