import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsError(!valid);
    setMessage(
      valid
        ? "That looks right. Demo mode is on, so your address was not saved."
        : "Please enter a complete email address, such as name@example.com.",
    );
  };

  return (
    <section className="newsletter section" aria-labelledby="newsletter-title">
      <div className="shell newsletter__grid">
        <div>
          <p className="eyebrow eyebrow--gold">Postcards from Deja Brew</p>
          <h2 id="newsletter-title">
            A little note for your <em>next visit.</em>
          </h2>
        </div>
        <div>
          <p className="newsletter__intro">
            New drinks, small rituals, and good things worth coming back for.
            Only when we have something to say.
          </p>
          <form onSubmit={submit} noValidate>
            <label htmlFor="email">Email address</label>
            <div className="input-row">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                aria-describedby="form-note form-message"
                aria-invalid={isError}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">
                Leave us a note <span aria-hidden="true">→</span>
              </button>
            </div>
            <p
              className={`form-message ${isError ? "form-message--error" : ""}`}
              id="form-message"
              role="status"
            >
              {message}
            </p>
            <p className="form-note" id="form-note">
              Prototype demo — no email addresses are collected or stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
