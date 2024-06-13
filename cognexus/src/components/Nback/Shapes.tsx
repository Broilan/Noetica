import React from 'react';
import '../../index.css';

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

const shapes: Shapes = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
  trapezoid: <Trapezoid />,
  hexagon: <Hexagon />,
  heptagon: <Heptagon />,
};

const ShapesComponent: React.FC = () => {
  // Get the keys of the shapes object
  const shapeKeys = Object.keys(shapes);

  // Select a random key from the shapeKeys array
  const randomKey = shapeKeys[Math.floor(Math.random() * shapeKeys.length)];

  // Get the corresponding shape component
  const RandomShape = shapes[randomKey];

  return (
    <div className="shape-container">
      <div className="shape">
        {RandomShape}
      </div>
    </div>
  );
};

export default ShapesComponent;