import { requestOptions } from "../services/requestOptions";

export function Importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";
  let imported: any;
  fetch(link, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
