import { mockCards } from "../data/mockCards";

export default function CardPreview({ name, rewards }) {
  return (
    <div className="card-preview">
      {mockCards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.rewards}</p>
        </div>
      ))}
    </div>
  );
}
