import tmdbApi from "./tmdbApi";
import { IPerson } from "../types";

interface IParams {
  person: IPerson;
}

const { profile } = tmdbApi.img;

const formatPerson = ({ person }: IParams) => ({
  ...person,
  ...(person.job && { job: [person.job] }),
  profile_url: profile({ path: person.profile_path }),
  tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
});

export default formatPerson;
