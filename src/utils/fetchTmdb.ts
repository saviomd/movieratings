import tmdbApi from "./tmdbApi";

interface IParams {
  path: string;
  queryString?: string;
}

const fetchTmdb = async ({ path, queryString = "" }: IParams) => {
  const { url, key } = tmdbApi;
  const response = await fetch(`${url}${path}?api_key=${key}${queryString}`);
  if (!response.ok) {
    throw Error(response.status.toString());
  }
  return response.json();
};

export default fetchTmdb;
