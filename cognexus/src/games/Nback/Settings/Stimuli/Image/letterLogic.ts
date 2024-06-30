export class LetterDrawer {
    private ctx: CanvasRenderingContext2D;
  
    constructor(ctx: CanvasRenderingContext2D) {
      this.ctx = ctx;
    }
  
    drawLetter(
      x: number,
      y: number,
      letter: string,
      fontSize: number,
      fontColor: string = 'black',
      font: string = 'Arial'
    ) {
      this.ctx.font = `${fontSize}px ${font}`;
      this.ctx.fillStyle = fontColor;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(letter, x, y);
    }
  }
  