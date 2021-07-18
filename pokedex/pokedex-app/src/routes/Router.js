import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/PokedexPage"}>
          <PokedexPage />
        </Route>
        <Route exact path={"/PokemonDetailsPage/:name"}>
          <PokemonDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
