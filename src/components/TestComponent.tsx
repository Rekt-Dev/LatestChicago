import { OpenCard } from "./OpenCard";
import { mockLink } from "../components/Card";
import { GoToArtist } from "../components/GoToArtist";
import { testLi } from "./Card";

export function TestComponent() {
  console.log(`testFunction activ8d`);

  return (
    <div>
      <h1>Artwork Page</h1>

      <img
        onClick={OpenCard}
        width="90%"
        height="90%"
        alt=" 3 cats"
        src={mockLink}
      />
      <ul>
        {}
        <li onClick={GoToArtist}>{"bro" || "artist name"}</li>
        <li onClick={testLi}>{"title"}</li>
        <li>year</li>
      </ul>
    </div>
  );
}
