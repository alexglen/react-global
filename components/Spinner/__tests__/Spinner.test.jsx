import { create } from "react-test-renderer";
import Spinner from "../Spinner";

describe("Spinner", () => {
  test("render <Spinner />", () => {
    const component = create(<Spinner />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
