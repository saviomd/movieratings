import tmdbApi from "./tmdbApi";
import type { IPerson } from "~/types";

interface IParams {
  person: IPerson;
}

interface IPersonFormatted extends Omit<IPerson, "job" | "order"> {
  job: (string | undefined)[];
  order: number;
  profile_url: string | undefined;
  tmdbURI: string;
}

const { profile } = tmdbApi.img;

const formatPerson = ({ person }: IParams): IPersonFormatted => ({
  ...person,
  job: [person.job ?? undefined],
  order: person.order ?? 0,
  profile_url: profile({ path: person.profile_path }),
  tmdbURI: `https://www.themoviedb.org/person/${String(person.id)}`,
});

export default formatPerson;
