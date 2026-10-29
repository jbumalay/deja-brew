import { photos } from "../data/photos";
import { highlights } from "../data/highlights";

export function CafeExperience() {
  return (
    <section className="experience section" id="experience">
      <div className="shell">
        <div className="experience__heading">
          <p className="eyebrow">Your corner of the world</p>
          <h2>
            Your seat is<br />
            <em>still here.</em>
          </h2>
          <p>Come for the coffee. Stay until you forget what time it is.</p>
        </div>
        <div className="collage">
          <figure className="collage__main">
            <img
              src={photos.interior}
              alt="Warm café interior with espresso machine and hanging lights"
              loading="lazy"
            />
            <figcaption>THE ROOM / LATE AFTERNOON</figcaption>
          </figure>
          <figure className="collage__window">
            <img
              src={photos.window}
              alt="A row of empty window seats waiting in a café"
              loading="lazy"
            />
          </figure>
          <figure className="collage__barista">
            <img
              src={photos.barista}
              alt="Barista tamping freshly ground coffee into a portafilter"
              loading="lazy"
            />
          </figure>
          <figure className="collage__detail">
            <img
              src={photos.detail}
              alt="Warm pendant lights glowing over a café counter"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="experience__highlights">
          {highlights.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
