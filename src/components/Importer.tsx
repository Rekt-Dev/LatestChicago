import { requestOptions } from "../services/requestOptions";

export function artworksImporter() {
  const link = "";
  fetch(link, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
