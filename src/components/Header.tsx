import { lucky } from "../services/feelingLucky";
import React, { useState } from "react";
import { requestOptions } from "../services/requestOptions";

function Header(type: any) {
  function concatSearch() {
    const chicagoLink = "https://api.artic.edu/api/v1/artworks/search?q=";

    const link = chicagoLink + find;

    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  const [find, setFind] = useState("");

  function HandleChange(event: any) {
    const e = event.target.value;
    setFind(e);
    return e;
  }

  return (
    <div>
      <h1 className="center">The Art Institute of Chicago</h1>

      <div className="center">
        <input onChange={HandleChange} placeholder="Enter your search here" />
      </div>
      <div className="center">
        <div className="button">
          <button onClick={concatSearch} type="button" className="button">
            Search
          </button>
        </div>
        <button onClick={lucky} className="button" type="button">
          Randomize it !
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Header;
