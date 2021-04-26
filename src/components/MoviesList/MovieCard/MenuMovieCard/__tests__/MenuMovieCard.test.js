import { BrowserRouter } from "react-router-dom";
import store from "../../../../../redux/store";
import MenuMovieCard from "../MenuMovieCard";
import { create } from "react-test-renderer";
import { Provider } from "react-redux";

const getComponent = (isMenuModalOpen = false) => {
  return create(
    <Provider store={store}>
      <BrowserRouter>
        <MenuMovieCard isMenuModalOpen setIsMenuModalOpen={() => jest.fn()} movieCardId="-MWJn2JOvxRpVKrK0Ye3" />
      </BrowserRouter>
    </Provider>
  );
};

describe("MenuMovieCard was rendered", () => {
  test("render <MenuMovieCard />", () => {
    const component = getComponent();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("render <MenuMovieCard />", () => {
    const component = getComponent(true);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
