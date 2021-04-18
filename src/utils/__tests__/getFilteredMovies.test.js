import { getFilteredMovies } from "../getFilteredMovies";
import { mockedData } from "../mockedData";

describe("getFilteredMovies", () => {
  test.each`
    filter
    ${"all"}
    ${"Drama"}
    ${"Fantasy"}
    ${"Horror"}
  `('(filter: "$filter")', ({ filter }) => {
    expect(getFilteredMovies(filter, mockedData)).toMatchSnapshot();
  });
});
