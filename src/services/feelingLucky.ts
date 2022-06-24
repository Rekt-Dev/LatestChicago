import { requestOptions } from "./requestOptions";

export function lucky() {
  let value = Math.floor(Math.random() * 26);
  let r = (Math.random() * 10).toString(36).substring(9);

  const link1 = "https://api.artic.edu/api/v1/artworks/search?limit=1q=";

  const link2 = link1 + r;

  fetch(link2, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
