const baseURL = process.env.REACT_APP_API_URL;

export const fetchMovies = async () => {
  const res = await fetch(`${baseURL}/movies.json`);
  if (res.ok) {
    return await res.json();
  }
};

export const postMovie = async (data) => {
  return await fetch(`${baseURL}/movies.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
};

export const putMovie = async (data, id) => {
  return await fetch(`${baseURL}/movies${id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
};

export const deleteMovie = async (id) => {
  return await fetch(`${baseURL}/movies${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
