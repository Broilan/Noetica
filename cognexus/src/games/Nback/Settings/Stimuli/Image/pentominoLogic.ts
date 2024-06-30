export type PentominoType = 'F' | 'I' | 'L' | 'N' | 'P' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export class PentominoDrawer {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  private drawSquare(x: number, y: number, size: number, fillColor: string) {
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(x, y, size, size);
  }

  drawPentomino(
    x: number,
    y: number,
    size: number,
    type: PentominoType,
    fillColor: string = 'black'
  ) {
    // Define the relative coordinates for each pentomino type
    const pentominoes: Record<PentominoType, number[][]> = {
      F: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 1]],
      I: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
      L: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
      N: [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
      P: [[0, 0], [0, 1], [1, 0], [1, 1], [1, 2]],
      T: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
      U: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2]],
      V: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]],
      W: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
      X: [[0, 0], [1, 0], [2, 0], [1, 1], [1, -1]],
      Y: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 1]],
      Z: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]]
    };

    // Draw the pentomino based on its type
    pentominoes[type].forEach(([dx, dy]) => {
      this.drawSquare(x + dx * size, y + dy * size, size, fillColor);
    });
  }
}
