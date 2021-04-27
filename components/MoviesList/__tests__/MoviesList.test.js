import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import store from "../../../redux/store";
import { mockedData } from "../../../utils/mockedData";
import MoviesList from "../MoviesList";

describe("MoviesList", () => {
  test("render <MoviesList movies={mockedData} />", () => {
    const component = create(
      <Provider store={store}>
        <BrowserRouter>
          <MoviesList movies={mockedData} />
        </BrowserRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
