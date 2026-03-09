import tmdbApi from "./tmdbApi";
import type { Person, PersonFormatted } from "~/types";

interface Params {
  person: Person;
}

const { profile } = tmdbApi.img;

const formatPerson = ({ person }: Params): PersonFormatted => ({
  character: person.character,
  id: person.id,
  job: [person.job ?? undefined],
  name: person.name,
  order: person.order ?? 0,
  popularity: person.popularity,
  profile_url: profile({ path: person.profile_path }),
  tmdbURI: `https://www.themoviedb.org/person/${String(person.id)}`,
});

export default formatPerson;
