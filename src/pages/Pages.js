import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Spinner from "../components/Spinner/Spinner";

const HomePage = lazy(() => import("./HomePage"));
const MoviePage = lazy(() => import("./MoviePage"));
const ErrorPage = lazy(() => import("./404"));

const Pages = () => {
  return (
    <Suspense fallback={Spinner}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={HomePage} />
        <Route path={`/movies/:id/search`} component={MoviePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
