import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import store from "../../../redux/store";
import MoviesStatistic from "../MoviesStatistic";

describe("MoviesStatistic", () => {
  test("render <MoviesStatistic />", () => {
    const component = create(
      <Provider store={store}>
        <BrowserRouter>
          <MoviesStatistic moviesNumber={13} />
        </BrowserRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
