import React, { useEffect } from "react";
import gsap from "gsap";

const MatrixEffect = () => {
  useEffect(() => {
    const matrixContainer = document.getElementById("matrix");
    if (!matrixContainer) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    const columns = Math.floor(window.innerWidth / 10); // Ustunlar orasidagi masofa 10px
    const spans = [];

    for (let i = 0; i < columns; i++) {
      const span = document.createElement("span");
      span.textContent = letters[Math.floor(Math.random() * letters.length)];
      span.style.position = "absolute";
      span.style.left = `${i * 10}px`; // Harflar orasidagi masofa 10px
      span.style.top = "-50px";
      span.style.fontSize = "12px"; // Kichikroq harflar
      span.style.color = "#0f0";
      span.style.fontWeight = "bold";
      span.style.textShadow = "0px 0px 2px #0f0";
      span.style.opacity = "0.7";
      matrixContainer.appendChild(span);
      spans.push(span);

      gsap.to(span, {
        y: window.innerHeight + 50,
        duration: Math.random() * 10 + 5, // 3-8 soniya ichida tushadi
        delay: Math.random() * 8, // 0-2 soniya kechikish
        repeat: -1,
        ease: "linear",
      });
    }

    const letterInterval = setInterval(() => {
      spans.forEach((span) => {
        span.textContent = letters[Math.floor(Math.random() * letters.length)];
      });
    }, 1000); // Har 100ms da harflar yangilanadi

    return () => {
      spans.forEach((span) => span.remove());
      clearInterval(letterInterval);
    };
  }, []);

  return (
    <div
      id="matrix"
      className=" fixed top-0 left-0 w-full h-[180px] overflow-hidden pointer-events-none z-0"
    ></div>
  );
};

export default MatrixEffect;