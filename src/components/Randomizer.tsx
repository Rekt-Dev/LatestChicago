import { requestOptions } from "../services/requestOptions";

export function numToLetter(num: any) {
  let value1 = Math.floor(Math.random() * 26);
  let r1 = (Math.random() * 1.1).toString(36).substring(2);
  console.log(`value1 ${value1}`);
  console.log(`r1 ${r1}`);

  const link3 = "https://api.artic.edu/api/v1/artworks/search?limit=1q=";

  const link4 = link3 + num;
  let link5 = "";
  console.log(`link4 ${link4}`);

  fetch(link5, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));

  switch (value1) {
    case 0:
      num = "a";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 1:
      num = "b";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 2:
      num = "c";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 3:
      num = "d";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 4:
      num = "e";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 5:
      num = "f";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 6:
      num = "g";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 7:
      num = "h";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 8:
      num = "i";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 9:
      num = "j";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 10:
      num = "k";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 11:
      num = "l";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 12:
      num = "m";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 13:
      num = "n";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 14:
      num = "o";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 15:
      num = "p";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 16:
      num = "q";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 17:
      num = "r";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 18:
      num = "s";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 19:
      num = "t";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 20:
      num = "u";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 21:
      num = "v";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 22:
      num = "w";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 23:
      num = "x";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 24:
      num = "y";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;

    case 25:
      num = "z";
      console.log(`num ${num}`);
      link5 = link3 + num;
      fetch(link5, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      break;
  }
}
