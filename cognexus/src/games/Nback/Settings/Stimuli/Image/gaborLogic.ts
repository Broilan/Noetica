export class GaborPatchDrawer {
    private ctx: CanvasRenderingContext2D;
    private animationFrameId: number | null = null;
  
    constructor(ctx: CanvasRenderingContext2D) {
      this.ctx = ctx;
    }
  
    drawGaborPatch(
      x: number,
      y: number,
      size: number,
      frequency: number,
      orientation: number,
      phase: number,
      sigma: number = size / 6,
      mean: number = 128,
      amplitude: number = 127
    ) {
      const halfSize = size / 2;
      const cosOrientation = Math.cos(orientation);
      const sinOrientation = Math.sin(orientation);
  
      const imageData = this.ctx.createImageData(size, size);
      const data = imageData.data;
  
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const xPrime = (i - halfSize) * cosOrientation + (j - halfSize) * sinOrientation;
          const yPrime = -(i - halfSize) * sinOrientation + (j - halfSize) * cosOrientation;
  
          const gaussianEnvelope = Math.exp(-(xPrime ** 2 + yPrime ** 2) / (2 * sigma ** 2));
          const sinusoidalComponent = Math.cos(2 * Math.PI * frequency * xPrime + phase);
  
          const luminance = mean + amplitude * gaussianEnvelope * sinusoidalComponent;
  
          const pixelIndex = (i + j * size) * 4;
          data[pixelIndex] = data[pixelIndex + 1] = data[pixelIndex + 2] = luminance; // Set R, G, B to luminance
          data[pixelIndex + 3] = 255; // Set alpha channel to fully opaque
        }
      }
  
      this.ctx.putImageData(imageData, x - halfSize, y - halfSize);
    }
  
    animateGaborPatch(
      x: number,
      y: number,
      size: number,
      frequency: number,
      orientation: number,
      sigma: number = size / 6,
      mean: number = 128,
      amplitude: number = 127,
      speed: number = 0.1
    ) {
      let phase = 0;
  
      const animate = () => {
        this.ctx.clearRect(x - size / 2, y - size / 2, size, size);
        this.drawGaborPatch(x, y, size, frequency, orientation, phase, sigma, mean, amplitude);
        phase += speed;
  
        this.animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
    }
  
    stopAnimation() {
      if (this.animationFrameId !== null) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    }
  }
  