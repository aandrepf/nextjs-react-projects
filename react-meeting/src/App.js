import { Route, Switch } from "react-router-dom";

import { AllMeetupsPage } from "./pages/AllMeetups";
import { NewMeetupPage } from "./pages/NewMeetup";
import { FavoritesPage } from "./pages/Favorites";

import { Layout } from "./components/layout/Layout";

// * EXACT = quando TRUE não deve chechar o caminho somente pela / e sim pelo caminho completo

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}
