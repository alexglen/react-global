import React, { lazy, Suspense } from "react";
import Error404 from "../components/Error404";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { moviesSelector } from "../redux/selectors/moviesSelectors";

const HomePage = lazy(() => import("./HomePage"));
const MoviePage = lazy(() => import("./MoviePage"));
const EmptyMoviesListPage = lazy(() => import("./EmptyMoviesListPage"));

function Pages() {
  const movies = useSelector(moviesSelector);
  const isMoviesEmpty = !movies?.length;

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={isMoviesEmpty ? EmptyMoviesListPage : HomePage} />
        <Route path={`/movies/:id`} component={MoviePage} />
        <Route render={() => <Error404 />} />
      </Switch>
    </Suspense>
  );
}

export default Pages;
