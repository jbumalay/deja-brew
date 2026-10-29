export function MapIllustration() {
  return (
    <div
      className="map"
      aria-label="Decorative location illustration; address is fictional and no map coordinates are configured"
    >
      <span className="map__road map__road--one" />
      <span className="map__road map__road--two" />
      <span className="map__road map__road--three" />
      <div className="map__marker">
        <span>DB</span>
      </div>
      <p>
        YOU<br />
        MIGHT BE<br />
        HERE
      </p>
      <small>MAP STUDY / NOT TO SCALE</small>
    </div>
  );
}
