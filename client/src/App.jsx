import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import "./App.css";
import Displaydata from "./components/Displaydata";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Displaydata />
      </div>
    </ApolloProvider>
  );
}

export default App;
