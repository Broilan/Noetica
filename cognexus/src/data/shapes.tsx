// Shapes.tsx (or Shapes.js if not using TypeScript)
import React from 'react';
import '../index.css'

// Define the shape components
const Circle = () => <div className="w-24 h-24 bg-red-500 rounded-full"></div>;
const Square = () => <div className="w-24 h-24 bg-blue-500"></div>;
const Triangle = () => <div className="triangle"></div>;
const Trapezoid = () => <div className="trapezoid"></div>;
const Hexagon = () => <div className="hexagon"></div>;
const Heptagon = () => <div className="heptagon"></div>;

interface Shapes {
  [key: string]: JSX.Element;
}

export const shapes: Shapes = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
  trapezoid: <Trapezoid />,
  hexagon: <Hexagon />,
  heptagon: <Heptagon />,
};

export { Circle, Square, Triangle, Trapezoid, Hexagon, Heptagon };