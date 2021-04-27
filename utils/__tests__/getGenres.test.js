import { getGenres } from "../getGenres";
import { mockedData } from "../mockedData";

describe("getGenres", () => {
  test("", () => {
    expect(getGenres(mockedData)).toMatchSnapshot();
  });
});
