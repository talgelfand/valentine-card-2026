import { useEffect, useRef } from "react";

const PETAL_COUNT = 30;

function FallingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.textContent = "🌸";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${4 + Math.random() * 6}s`;
      petal.style.animationDelay = `${Math.random() * 8}s`;
      petal.style.fontSize = `${10 + Math.random() * 14}px`;
      petal.style.opacity = `${0.4 + Math.random() * 0.6}`;
      container.appendChild(petal);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="petals-container" />;
}

export default FallingPetals;
