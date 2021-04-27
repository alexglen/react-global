import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import store from "../../../../redux/store";
import MovieCard from "../MovieCard";

describe("MovieCard", () => {
  test("render <MovieCard />", () => {
    const component = create(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCard
            img="https://i10.fotocdn.net/s124/a80214fc2d561294/user_xl/2825091898.jpg"
            title="Brother"
            releaseDate="1997-06-13"
            genre="Thriller"
            id="-MWJn2JOvxRpVKrK0Ye3"
          />
        </BrowserRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
