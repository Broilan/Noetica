// shapeDrawer.ts

export type ShapeType = 'circle' | 'square' | 'rectangle' | 'star' | 'octagon';

export class ShapeDrawer {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  clear(x: number, y: number, width: number, height: number) {
    this.ctx.clearRect(x, y, width, height);
  }

  drawCircle(x: number, y: number, radius: number, fillColor: string = 'black') {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = fillColor;
    this.ctx.fill();
  }

  drawSquare(x: number, y: number, size: number, fillColor: string = 'black') {
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(x, y, size, size);
  }

  drawRectangle(x: number, y: number, width: number, height: number, fillColor: string = 'black') {
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(x, y, width, height);
  }

  drawStar(x: number, y: number, radius: number, points: number, innerRadius: number, fillColor: string = 'black') {
    this.ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const angle = (i * 2 * Math.PI) / points - Math.PI / 2;
      const nextAngle = ((i + 1) * 2 * Math.PI) / points - Math.PI / 2;

      this.ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
      this.ctx.lineTo(
        x + innerRadius * Math.cos(nextAngle),
        y + innerRadius * Math.sin(nextAngle)
      );
    }
    this.ctx.closePath();
    this.ctx.fillStyle = fillColor;
    this.ctx.fill();
  }

  drawOctagon(x: number, y: number, radius: number, fillColor: string = 'black') {
    const sides = 8;
    this.ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 8;
      this.ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    }
    this.ctx.closePath();
    this.ctx.fillStyle = fillColor;
    this.ctx.fill();
  }
}

export class GridShapeDrawer extends ShapeDrawer {
  drawShapeInGrid(
    shapeType: ShapeType,
    gridX: number,
    gridY: number,
    cellSize: number,
    fillColor: string = 'black'
  ) {
    const x = gridX * cellSize + cellSize / 2;
    const y = gridY * cellSize + cellSize / 2;
    const size = cellSize / 2;

    switch (shapeType) {
      case 'circle':
        this.drawCircle(x, y, size, fillColor);
        break;
      case 'square':
        this.drawSquare(x - size / 2, y - size / 2, size, fillColor);
        break;
      case 'rectangle':
        this.drawRectangle(x - size / 2, y - size / 4, size, size / 2, fillColor);
        break;
      case 'star':
        this.drawStar(x, y, size, 5, size / 2, fillColor);
        break;
      case 'octagon':
        this.drawOctagon(x, y, size, fillColor);
        break;
    }
  }

  clearShapeInGrid(gridX: number, gridY: number, cellSize: number) {
    const x = gridX * cellSize;
    const y = gridY * cellSize;
    this.clear(x, y, cellSize, cellSize);
  }
}
