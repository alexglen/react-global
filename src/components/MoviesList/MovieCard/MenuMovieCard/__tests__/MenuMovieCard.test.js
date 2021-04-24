import { BrowserRouter } from "react-router-dom";
import store from "../../../../../redux/store";
import MenuMovieCard from "../MenuMovieCard";
import { create } from "react-test-renderer";
import { Provider } from "react-redux";

describe("MenuMovieCard", () => {
  test("render <MenuMovieCard />", () => {
    const component = create(
      <Provider store={store}>
        <BrowserRouter>
          <MenuMovieCard
            isMenuModalOpen={false}
            setIsMenuModalOpen={() => jest.fn()}
            movieCardId="-MWJn2JOvxRpVKrK0Ye3"
          />
        </BrowserRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("render <MenuMovieCard />", () => {
    const component = create(
      <Provider store={store}>
        <BrowserRouter>
          <MenuMovieCard isMenuModalOpen setIsMenuModalOpen={() => jest.fn()} movieCardId="-MWJn2JOvxRpVKrK0Ye3" />
        </BrowserRouter>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
