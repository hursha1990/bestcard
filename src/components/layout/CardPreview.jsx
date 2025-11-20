import { mockCards } from "../../data/mockCards";

const CardPreview = ({ cards = mockCards }) => {
  return (
    <div className="card-preview">
      {cards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.rewards}%</p>
          <p>Category: {card.category}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPreview;