import { decRating, incRating, newToOld, oldToNew } from "../../constants";
import { getSortedMovies } from "../getSortedMovies";
import { mockedData } from "../mockedData";

describe("getSortedMovies", () => {
  test.each`
    type
    ${oldToNew}
    ${newToOld}
    ${incRating}
    ${decRating}
    ${""}
  `('(type: "$type")', ({ type }) => {
    expect(getSortedMovies(type, mockedData)).toMatchSnapshot();
  });
});
