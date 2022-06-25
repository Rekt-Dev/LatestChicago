import React from "react";
import "../app.css";
import { GoToArtist } from "./GoToArtist";
import { MDBRipple } from "mdb-react-ui-kit";

// If you want to see data for just one artwork, you can use the /artworks/{id} detail endpoint. For example, here's Starry Night and the Astronauts by Alma Thomas:
//https://api.artic.edu/api/v1/artworks/129884

export function testLi() {
  console.log(`li has been pressed bish`);
}

const endLink = "/full/843,/0/default.jpg";
const startLink = "https://www.artic.edu/iiif/2/";
//the artworkid  which is image_id comes from the json weve just used a promise to get
const artworkId = "fd26fe20-e8fd-d80a-c3e9-c07365b0db61";
const constructedLink = startLink + artworkId + endLink;
const retrieveArtworks =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&limit=100";
console.log(retrieveArtworks);
export function Card(props: any) {
  return (
    <MDBRipple
      className="bg-image hover-overlay shadow-1-strong rounded"
      style={{ maxWidth: "22rem" }}
      rippleTag="div"
      rippleColor="light"
    >
      <div className="">
        <a href="OpenCard">
          <img
            width="70%"
            height="20%"
            alt=" 3 cats"
            src={constructedLink}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
        <ul>
          {}
          <a href="./GoToArtist">
            <li onClick={GoToArtist}>{props.artistName || "artist name"}</li>
          </a>
          <li onClick={testLi}>{props.title}</li>
          <li>{props.year}</li>
          <li>{props.town}</li>
        </ul>
      </div>
    </MDBRipple>
  );
}
