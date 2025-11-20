import { useState, useMemo } from "react";
import CardPreview from "../layout/CardPreview";
import { mockCards } from "../../data/mockCards";

const LandingPageA = () => {
  const [query, setQuery] = useState("");

  // memoize filtered results for performance
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockCards;
    return mockCards.filter(
      (c) =>
        (c.name && c.name.toLowerCase().includes(q)) ||
        (c.category && c.category.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <main>
      {/* <h2>Landing Page A</h2> */}

      <div className="search-row">
        <label htmlFor="card-search" className="search-label">
          Search cards:
        </label>
        <input
          id="card-search"
          className="search-input"
          type="search"
          value={query}
          placeholder="Search by name or rewards..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <CardPreview cards={filtered} />
      <section aria-label="category-discounts" className="discount-card">
        <h3 className="discount-tracker-title">Discount Tracker</h3>
        <p className="discount-desc">Category discounts and progress</p>

        <div className="discount-list">
          {[
            { label: "Chase Sapphire", pct: 5, color: "#d9534f" },
            { label: "American Express", pct: 4, color: "#f0ad4e" },
            { label: "Citi Card", pct: 1.5, color: "#0275d8" },
            { label: "Capital One", pct: 3, color: "#20c997" },
            { label: "Discover it", pct: 2, color: "#28a745" },
            { label: "Bank of America", pct: 6, color: "#8f6076ff" },
          ].map((item) => (
            <div key={item.label}>
              <div className="discount-item-row">
                <span className="discount-item-label">{item.label}</span>
                <span className="discount-item-pct">
                  {item.pct === 10 ? "Complete!" : `${item.pct}%`}
                </span>
              </div>

              <div className="discount-track">
                <div
                  className="discount-fill"
                  style={{ width: `${item.pct}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <br />
    </main>
  );
};

export default LandingPageA;
