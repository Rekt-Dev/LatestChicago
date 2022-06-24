import { requestOptions } from "./requestOptions";

export const artworks =
  "https://api.artic.edu/api/v1/artworks?page=1&limit=100";

export function artworkRetriever() {
  const link1 =
    "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id&limit=100";

  fetch(link1, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(`this is data ${data}`));
}
