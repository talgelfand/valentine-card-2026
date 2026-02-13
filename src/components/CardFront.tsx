import Totoro from "./Totoro";

function CardFront() {
  return (
    <div className="card-face card-front">
      {/* sakura branches */}
      <div className="branch left-branch">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`sakura s${i}`}>
            &#10047;
          </div>
        ))}
      </div>
      <div className="branch right-branch">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`sakura s${i}`}>
            &#10047;
          </div>
        ))}
      </div>

      {/* torii gate */}
      <div className="torii-gate">
        <div className="torii-top" />
        <div className="torii-beam" />
        <div className="torii-pillar left" />
        <div className="torii-pillar right" />
      </div>

      <Totoro />

      <h1 className="front-title">Edwin, will you be my Valentine?</h1>
    </div>
  );
}

export default CardFront;
