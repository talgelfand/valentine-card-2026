import SootSprites from "./SootSprites";
import Kodama from "./Kodama";

function CardInside() {
  return (
    <div className="card-face card-inside">
      <div className="inside-content">
        <SootSprites />

        <div className="heart-container">
          <div className="heart">&hearts;</div>
        </div>

        <p className="inside-english">I love you so much!</p>
        <p className="inside-english">Let's go to Japan again 🥹</p>

        <Kodama />
      </div>
    </div>
  );
}

export default CardInside;
