import tmdbApi from "./tmdbApi";

interface IParams {
  path: string;
  queryString?: string;
}

const fetchTmdb = ({ path, queryString = "" }: IParams) => {
  const { url, key } = tmdbApi;
  return fetch(`${url}${path}?api_key=${key}${queryString}`).then(
    (response) => {
      if (!response.ok) {
        throw Error(response.status.toString());
      }
      return response.json();
    }
  );
};

export default fetchTmdb;
