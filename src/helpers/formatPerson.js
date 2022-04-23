import tmdbApi from "./tmdbApi";

const { profile } = tmdbApi.img;

const formatPerson = ({ person }) => ({
  ...person,
  ...(person.job && { job: [person.job] }),
  profile_url: profile({ path: person.profile_path }),
  tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
});

export default formatPerson;
