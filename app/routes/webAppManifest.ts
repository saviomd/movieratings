const color = "#212529";
const iconSizes = ["192", "512"];
const url = `${import.meta.env.PROD ? "https://saviomd.com" : ""}${import.meta.env.BASE_URL}`;

export const manifest = {
  background_color: color,
  description: "My movie ratings from Letterboxd",
  display: "standalone",
  icons: iconSizes.map((size) => ({
    sizes: `${size}x${size}`,
    src: `${url}img/icon-${size}.png`,
    type: "image/png",
  })),
  name: "Movie Ratings",
  short_name: "movieratings",
  start_url: url,
  theme_color: color,
};

export function loader() {
  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
