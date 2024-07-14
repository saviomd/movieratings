interface IParams {
  url: string;
  queryString?: string;
}

const fetchClient = async ({
  url,
  queryString = "",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: IParams): Promise<any> => {
  const response = await fetch(`${url}${queryString ? `?${queryString}` : ""}`);
  if (!response.ok) {
    throw Error(response.status.toString());
  }
  return response.json();
};

export default fetchClient;
