import { mockedData } from "../../../utils/mockedData";
import { ADD_NEW_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../../constants";
import { moviesReducer } from "../moviesReducer";

const initialState = {
  movies: mockedData,
};

const newMovie = {
  description:
    "Wrath of Man is an upcoming action thriller film written and directed by Guy Ritchie, based on the 2004 French film, Cash Truck by Nicolas Boukhrief. It is Ritchie's fourth directorial collaboration with lead actor Jason Statham, following Lock, Stock and Two Smoking Barrels (1998), Snatch (2000), and Revolver (2005). Jason Statham as Harry.",
  duration: "123",
  genre: "Thriller",
  img: "https://глобал-кино.рф/images/2021/04/21/_spmedia_thumbs/WOM_banner_1080x1350_TICKETS-2.jpg",
  rating: "3.7",
  releaseDate: "2021-04-23",
  title: "Wrath of Man",
  id: "-MZ1gIIxC0mk_8VHk040",
};

const editedMovie = {
  description:
    "Brother (Russian: Брат, translit. Brat) is a 1997 Russian neo-noir crime drama film written and directed by Aleksei Balabanov. The film stars Sergei Bodrov Jr. as Danila Bagrov, a young ex-army conscript who becomes embroiled with the Saint Petersburg mob through his criminal older brother. It appeared in the Un Certain Regard section at the 1997 Cannes Film Festival.[1]After its release on VHS in June 1997, Brother unexpectedly became one of the most commercially successful Russian films of the 1990s and quickly rose to cult film status throughout Russia. Due to the films popularity and fan demand, a sequel, Brother 2, was released in 2000",
  duration: "145",
  genre: "Thriller",
  img: "https://i10.fotocdn.net/s124/a80214fc2d561294/user_xl/2825091898.jpg",
  rating: "4.5",
  releaseDate: "1997-06-13",
  title: "Brother",
  id: "-MWJn2JOvxRpVKrK0Ye3",
};

describe("Movies reducer", () => {
  test("new movie should be added", () => {
    const mockAction = (payload) => ({ type: ADD_NEW_MOVIE, payload });
    const newState = moviesReducer(initialState, mockAction(newMovie));
    expect(newState.movies.length).toBe(4);
  });

  test("the title of movie should be correct", () => {
    const mockAction = (data, id) => ({ type: EDIT_MOVIE, payload: { data, id } });
    const newState = moviesReducer(initialState, mockAction(editedMovie, "-MWJn2JOvxRpVKrK0Ye3"));
    expect(newState.movies[2].duration).toBe("145");
  });

  test("the movie should be deleted", () => {
    const mockAction = (id) => ({ type: DELETE_MOVIE, payload: id });
    const newState = moviesReducer(initialState, mockAction("-MWJn2JOvxRpVKrK0Ye3"));
    expect(newState.movies.length).toBe(2);
  });
});
