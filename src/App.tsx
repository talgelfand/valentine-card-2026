import { useState } from "react";
import FallingPetals from "./components/FallingPetals";
import CardFront from "./components/CardFront";
import CardInside from "./components/CardInside";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FallingPetals />
      <div
        className="card-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className={`card ${isOpen ? "is-open" : ""}`}>
          <CardFront />
          <CardInside />
        </div>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              position: "relative",
              marginTop: "30px",
              padding: "12px 32px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#dc143c",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            Yes!
          </button>
        )}
      </div>
    </>
  );
}

export default App;
