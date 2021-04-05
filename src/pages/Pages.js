import React from "react";
import { Route, Switch } from "react-router";
import ErrorPage from "./404";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path={`/movies/:id`} component={MoviePage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Pages;
