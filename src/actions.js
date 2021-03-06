const baseURL = process.env.REACT_APP_API_URL;
const headers = { "Content-Type": "application/json;charset=utf-8" };

const changeDataFormat = (body) => Object.keys(body).map((id) => ({ id, ...body[id] }));

export const fetchMovies = async () => {
  const res = await fetch(`${baseURL}movies.json`);
  if (res.ok) {
    const body = await res.json();
    return changeDataFormat(body);
  }
};

export const searchMovies = async (search) => {
  const res = await fetch(`${baseURL}movies.json`);
  if (res.ok) {
    const body = await res.json();
    const movies = changeDataFormat(body);
    return movies.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
  }
};

export const postMovie = async (data) => {
  return await fetch(`${baseURL}movies.json`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
};

export const updateMovie = async (data, id) => {
  return await fetch(`${baseURL}movies/${id}.json`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
};

export const removeMovie = async (id) => {
  return await fetch(`${baseURL}movies/${id}.json`, {
    method: "DELETE",
    headers,
  });
};
