import { create } from "react-test-renderer";
import { mockedData } from "../../../utils/mockedData";
import MoviesList from "../MoviesList";

import "regenerator-runtime/runtime";

describe("MoviesList", () => {
  test("render <MoviesList movies={mockedData} />", () => {
    const component = create(<MoviesList movies={mockedData} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
