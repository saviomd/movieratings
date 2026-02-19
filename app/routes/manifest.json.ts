import { manifest } from "~/data";

export function loader() {
  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
