export function Manifesto() {
  return (
    <section className="manifesto section" aria-labelledby="manifesto-title">
      <div className="shell manifesto__grid">
        <div className="manifesto__copy">
          <p className="eyebrow eyebrow--gold">A small manifesto / DB-001</p>
          <h2 id="manifesto-title">
            Time moves.<br />
            Good coffee <em>stays.</em>
          </h2>
          <div className="manifesto__lines">
            <p>For the first sip before the world wakes up.</p>
            <p>For the afternoons that turn into evenings.</p>
            <p>For the familiar things that never get old.</p>
          </div>
          <a className="manifesto__link" href="#visit">
            Make room for the moment. <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className="manifesto__photo">
          <div className="manifesto__offset" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1790410991749-35bed2f4ddd6?auto=format&fit=crop&w=1200&q=86"
            alt="Small ribbed espresso cup on a rustic wooden table"
            loading="lazy"
          />
          <figcaption>THE FIRST CUP / 07:14 AM</figcaption>
        </figure>
      </div>
    </section>
  );
}
