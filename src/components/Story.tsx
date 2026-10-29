import { photos } from "../data/photos";

export function Story() {
  return (
    <section className="story section" id="story">
      <div className="shell story__grid">
        <div className="story__photo reveal">
          <img
            src={photos.story}
            alt="Quiet chairs arranged beside a softly lit café window"
            loading="lazy"
          />
          <p>A STUDY IN SLOW MORNINGS — VOL. 01</p>
        </div>
        <div className="story__copy">
          <p className="eyebrow">The reason we return</p>
          <h2>Not every day needs to be <em>different.</em></h2>
          <div className="story__body">
            <p>
              Some days, you want something new. Other days, you want the same
              corner seat, the same familiar faces, and the same first sip.
            </p>
            <p>
              Deja Brew was imagined for the in-between moments. A little pause
              before the day begins. A conversation that runs longer than
              planned. A place that feels like yours, even on the first visit.
            </p>
            <p>
              <strong>
                Good coffee is the ritual.<br />
                Feeling at home is the point.
              </strong>
            </p>
          </div>
          <a className="text-link" href="#experience">
            Step inside <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
