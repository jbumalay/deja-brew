import { menu } from "../data/menu";

export function SignatureMenu() {
  return (
    <section className="section menu-section" id="menu">
      <div className="shell">
        <div className="section-heading menu-heading">
          <div>
            <p className="eyebrow">The house favorites / Vol. 01</p>
            <h2>
              A few familiar<br />
              <em>feelings.</em>
            </h2>
          </div>
          <p>Three ways to find your moment.</p>
        </div>
        <div className="menu-grid">
          {menu.map((drink, index) => (
            <article className={`drink drink--${index + 1}`} key={drink.name}>
              <div className="drink__image">
                <img src={drink.image} alt={drink.alt} loading="lazy" />
                <span>{drink.number}</span>
              </div>
              <div className="drink__content">
                <div className="drink__meta">
                  <span>{drink.category}</span>
                  <span>{drink.price}</span>
                </div>
                <h3>{drink.name}</h3>
                <p className="drink__ingredients">{drink.ingredients}</p>
                <p>{drink.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
