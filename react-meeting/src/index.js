import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { App } from "./App";
import { FavoritesContextProvider } from "./store/favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // * AGORA TODOS OS COMPONENTES INTERAGEM COM ESSE CONTEXT
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
