import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PostPage, UserPage, ContactPage } from "./pages";
import { client } from "./graphql";
import { GlobalLayout } from "./layouts";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalLayout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/users/:userId">
              <UserPage />
            </Route>
            <Route exact path="/posts/:postId">
              <PostPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </GlobalLayout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
