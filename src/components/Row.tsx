import { json } from "../services/json";
import { Card } from "../components/Card";

export function Row() {
  console.log(`row was activ8d`);

  return (
    <div className="center">
      {json.map((obj) => (
        <Card
          key={obj.id}
          artistName={obj.name}
          title={obj.title}
          year={obj.year}
        />
      ))}
    </div>
  );
}
