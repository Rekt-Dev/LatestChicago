export function OpenCard() {
  const url = `https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg`;
  console.log("card was clicked");

  return (
    <div className="center">
      <div>
        <div>
          <img width="1050" height="650" src={url} alt="a beautiful piece" />
        </div>
        <ol>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
        </ol>
      </div>
    </div>
  );
}
