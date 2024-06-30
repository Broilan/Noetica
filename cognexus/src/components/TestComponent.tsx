import React, { useEffect, useRef } from 'react';
import { ShapeDrawer } from '../games/Nback/Settings/Stimuli/Image/shapeLogic'; // Corrected file name
import { GaborPatchDrawer } from '../games/Nback/Settings/Stimuli/Image/gaborLogic';
import { LetterDrawer } from '../games/Nback/Settings/Stimuli/Image/letterLogic';
import { PentominoDrawer, PentominoType } from '../games/Nback/Settings/Stimuli/Image/pentominoLogic';

const TestComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const shapeDrawer = new ShapeDrawer(ctx);
          const gaborDrawer = new GaborPatchDrawer(ctx);
          const letterDrawer = new LetterDrawer(ctx);
          const pentominoDrawer = new PentominoDrawer(ctx);
  
          // Draw static shapes
          shapeDrawer.drawCircle(50, 50, 30, 'red');
          shapeDrawer.drawSquare(100, 50, 50, 'blue');
          shapeDrawer.drawRectangle(200, 50, 80, 40, 'green');
          shapeDrawer.drawStar(50, 150, 30, 5, 15, 'yellow');
          shapeDrawer.drawOctagon(150, 150, 30, 'purple');
  
          // Animate Gabor patch
          const gaborSize = 100;
          const frequency = 0.1;
          const orientation = Math.PI / 4; // 45 degrees
          const speed = 0.34;
          gaborDrawer.animateGaborPatch(300, 150, gaborSize, frequency, orientation, undefined, undefined, undefined, speed);
  
          // Draw static letter
          letterDrawer.drawLetter(400, 150, 'A', 50, 'blue');
  
          // Draw static pentomino
          const pentominoSize = 20;
          const pentominoType: PentominoType = 'W';
          pentominoDrawer.drawPentomino(500, 150, pentominoSize, pentominoType, 'green');
  
          // Clean up animation on component unmount
          return () => {
            gaborDrawer.stopAnimation();
          };
        }
      }
    }, []);
  
    return (
      <div>
        <h1>Test Shapes</h1>
        <canvas ref={canvasRef} id="myCanvas" width="600" height="300"></canvas>
      </div>
    );
  };
  
  export default TestComponent;
