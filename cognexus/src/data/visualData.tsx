import { shapes } from './shapes';

interface Gabor {
    frequency: number;
    orientation: number;
    initialPhase: number;
    size: number;
    speed: number;
  }
  
  interface VisualData {
    highlight: any;
    gabor: Gabor[];
    shapes: { [key: string]: JSX.Element };
    phonemes: string[];
    numbers: number[];
    letters: string[];
    random: (string | number)[];
  }

// VISUAL DATA
export const visualData:VisualData = {

    // HIGHLIGHTS BG
    highlight: undefined,

    // GABOR DATA
  // GABOR DATA
  gabor: [
    { frequency: 5, orientation: 0, initialPhase: 5, size: 100, speed: 5 },
    { frequency: 5, orientation: 45, initialPhase: 5, size: 100, speed: 5 },
    { frequency: 5, orientation: 90, initialPhase: 5, size: 100, speed: 5 },
    { frequency: 5, orientation: 135, initialPhase: 5, size: 100, speed: 5 },
    { frequency: 5, orientation: 180, initialPhase: 5, size: 100, speed: 5 },
    { frequency: 5, orientation: 225, initialPhase: 5, size: 100, speed: 5 },
  ],

    // SHAPES DATA  
    shapes,
                    
    // PHONEMES DATA
    phonemes: [
        "oo", "ow", "oy", "ar", "er", "or"
    ],

    // NUMBERS DATA
    numbers: [
        1, 2, 3, 4, 5, 6
    ],

    //LETTERS DATA
    letters: [
        "A", "B", "C", "D", "E", "F"
    ],

    // RANDOM DATA
    random: [
        "circle", "square", "triangle", "trapezoid", "hexagon", "heptagon",
        "oo", "ow", "oy", "ar", "er", "or",
        1, 2, 3, 4, 5, 6,
        "A", "B", "C", "D", "E", "F",
    ]
};
