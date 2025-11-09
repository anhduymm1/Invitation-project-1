import React, { useEffect, useState } from "react";

const Petal = ({ style }) => {
  return (
    <img
      src="/petal.png"
      alt="petal"
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        opacity: 0.8,
        ...style,
        pointerEvents: "none",
      }}
    />
  );
};

const FallingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const initialPetals = [];
    for (let i = 0; i < 30; i++) {
      initialPetals.push({
        id: i,
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.8,
        swing: 50 + Math.random() * 50, // biên độ lắc ngang
        swingSpeed: 1 + Math.random() * 2, // tốc độ lắc
        rotateDir: Math.random() > 0.5 ? 1 : -1,
      });
    }
    setPetals(initialPetals);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
        width: "100vw",
      }}
    >
      {petals.map(
        ({ id, x, delay, duration, rotation, scale, swing, swingSpeed, rotateDir }) => {
          const keyframes = `
            @keyframes fallPetal${id} {
              0% {
                transform: translate(${x}px, -20px) rotate(${rotation}deg) scale(${scale});
                opacity: 1;
              }
              100% {
                transform: translate(${x + swing * Math.sin(2 * Math.PI * swingSpeed)}px, 100vh) rotate(${rotation + 360 * rotateDir}deg) scale(${scale});
                opacity: 0;
              }
            }
          `;
          return (
            <React.Fragment key={id}>
              <Petal
                style={{
                  animation: `fallPetal${id} ${duration}s linear ${delay}s infinite`,
                  animationFillMode: "forwards",
                }}
              />
              <style>{keyframes}</style>
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default FallingPetals;
