import React from "react";

type Ball = {
  background: string;
  left: string;
  top: string;
  transform: string;
  width: string;
  height: string;
};

const BallBackground: React.FC = () => {
  const COLORS = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
  const NUMBALLS = 50;
  const balls: Ball[] = [];

  for (let i = 0; i < NUMBALLS; i++) {
    const background = COLORS[Math.floor(Math.random() * COLORS.length)];
    const left = `${Math.floor(Math.random() * 100)}vw`;
    const top = `${Math.floor(Math.random() * 100)}vh`;
    const transform = `scale(${Math.random()})`;
    const width = `${Math.random()}em`;
    const height = `${width}em`;
    const ball: Ball = { background, left, top, transform, width, height };
    balls.push(ball);

    const to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12,
    };

    const anim = `${to}`;
    //  eslint-disable-next-line no-console
    console.log(anim, balls);
  }
  console.log("some test");

  return <>Hello</>;
};

export default BallBackground;
