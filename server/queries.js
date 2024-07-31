// query User($userId: ID!) {
//   users {
//     id
//     name
//     username
//     age
//     nationality
//     friends {
//       name
//       username
//       age
//       nationality
//       favouriteMovies {
//         id
//         name
//         yearOfPublication
//         isInTheaters
//       }
//     }
//   }

//   user(id: $userId) {
//     name
//     username
//     age
//     nationality
//     favouriteMovies {
//       name
//       yearOfPublication
//       isInTheaters
//     }
//   }
// }

// query Movie($name: String!) {
//   movies {
//     id
//     name
//     yearOfPublication
//     isInTheaters
//   }
//   movie(name: $name) {
//     id
//     yearOfPublication
//     isInTheaters
//   }
// }

// mutation CreateUser($input: createUserInput!) {
//   createUser(input: $input) {
//     name
//     username
//     age
//     nationality
//   }
// }

// {
//   "userId": 1,
//   "name": "Interstellar",
//   "input": {
//     "name": "Aviral",
//     "username": "aviral30",
//     "age": 21,
//     "nationality": "INDIA"
//   }
// }
