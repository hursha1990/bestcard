import { mockCards } from "../../data/mockCards";

const CardPreview = () => { 
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
};

export default CardPreview;