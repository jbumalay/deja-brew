import { MemoryStamp } from "./MemoryStamp";
import { photos } from "../data/photos";

export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero__copy">
        <p className="eyebrow">A place that feels like a memory</p>
        <h1>
          You've been<br />
          here <em>before.</em>
        </h1>
        <p className="hero__intro">
          Maybe not this morning. Maybe not this life. But somehow, it feels
          familiar.
        </p>
        <div className="hero__actions">
          <a className="button" href="#visit">
            Find your usual <span aria-hidden="true">→</span>
          </a>
          <a className="text-link" href="#menu">
            Explore the menu <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero__note">
          <span>OPEN DAILY</span>
          <span>GOOD THINGS TAKE TIME</span>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__echo" aria-hidden="true" />
        <figure>
          <img
            src={photos.hero}
            alt="An espresso cup resting in a pool of warm, low light"
          />
          <figcaption>FIG. 001 — A MOMENT REPEATED</figcaption>
        </figure>
        <MemoryStamp />
      </div>
    </section>
  );
}
