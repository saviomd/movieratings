import tmdbApi from "./tmdbApi";

const fetchTmdb = ({ path, queryString = "" }) => {
  const { url, key } = tmdbApi;
  return fetch(`${url}${path}?api_key=${key}${queryString}`).then(
    (response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    }
  );
};

export default fetchTmdb;
