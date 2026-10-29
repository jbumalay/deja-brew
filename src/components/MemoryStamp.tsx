export function MemoryStamp() {
  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 180 180">
        <defs>
          <path
            id="stampPath"
            d="M90,90 m-65,0 a65,65 0 1,1 130,0 a65,65 0 1,1 -130,0"
          />
        </defs>
        <text>
          <textPath href="#stampPath">
            DEJA BREW • SOME MOMENTS DESERVE A SECOND POUR{" "}
          </textPath>
        </text>
        <circle cx="90" cy="90" r="38" />
        <text className="stamp__db" x="90" y="98" textAnchor="middle">
          DB
        </text>
      </svg>
    </div>
  );
}
