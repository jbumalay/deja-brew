import { place } from "../data/place";
import { MapIllustration } from "./MapIllustration";

export function Location() {
  return (
    <section className="visit section" id="visit">
      <div className="shell">
        <div className="visit__heading">
          <p className="eyebrow">Come find your moment</p>
          <h2>
            Find your way <em>back.</em>
          </h2>
          <p>Your next favorite coffee break might be closer than you think.</p>
        </div>
        <div className="visit__grid">
          <div className="visit__details">
            <p className="placeholder-label">
              Fictional location · Placeholder details
            </p>
            <h3>{place.name}</h3>
            <address>{place.address}</address>
            <div className="hours" id="hours">
              <div>
                <span>Monday — Friday</span>
                <strong>{place.weekday}</strong>
              </div>
              <div>
                <span>Saturday — Sunday</span>
                <strong>{place.weekend}</strong>
              </div>
            </div>
            <div className="visit__actions">
              <button
                className="button button--disabled"
                type="button"
                disabled
                title="Directions become available when a real address is configured"
              >
                Get directions →
              </button>
              <a className="text-link" href="#hours">
                See opening hours
              </a>
            </div>
            <p className="fine-print">
              Directions are unavailable until a verified location is
              configured.
            </p>
          </div>
          <MapIllustration />
        </div>
      </div>
    </section>
  );
}
