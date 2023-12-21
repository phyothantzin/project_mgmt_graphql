import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
