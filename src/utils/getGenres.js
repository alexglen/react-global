const splitData = (data) =>
  data.reduce((acc, current) => [...acc, ...current.genre.split(', ')], []);

export const getGenres = (data) => {
  return [
    ...new Set(
      splitData(data)
      .map((el) => el.trim())
    ),
  ];
};
