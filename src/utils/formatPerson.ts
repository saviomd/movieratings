import tmdbApi from "./tmdbApi";
import type { IPerson } from "src/types";

interface IParams {
  person: IPerson;
}

interface IPersonFormatted extends Omit<IPerson, "job" | "profile_url"> {
  job: (string | null)[];
  profile_url: string | null;
  tmdbURI: string;
}

const { profile } = tmdbApi.img;

const formatPerson = ({ person }: IParams): IPersonFormatted => ({
  ...person,
  job: [person.job],
  profile_url: profile({ path: person.profile_path }),
  tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
});

export default formatPerson;
