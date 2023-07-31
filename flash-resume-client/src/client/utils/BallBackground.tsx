import React, { useEffect } from "react";

const COLORS = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const NUMBALLS = 50;

const BallBackground: React.FC = () => {
  useEffect(() => {
    const balls: HTMLDivElement[] = [];

    for (let i = 0; i < NUMBALLS; i++) {
      const ball: HTMLDivElement = document.createElement("div");
      ball.classList.add("absolute");
      ball.classList.add("rounded-[50%]");
      ball.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      const width = `${Math.random()}em`;
      ball.style.width = width;
      ball.style.height = width;
      balls.push(ball);
      const ballBackground: HTMLDivElement | null =
        document.querySelector(".ball-background");
      if (ballBackground) {
        ballBackground.append(ball);
      }
    }

    balls.forEach((el, i) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        },
      );
    });
  }, []);

  return (
    <div className='ball-background-container h-full w-full absolute left-0 top-0'>
      <div className='ball-background relative w-full h-full' />
    </div>
  );
};

export default BallBackground;
