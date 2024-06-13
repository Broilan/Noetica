import '../index.css'

const Circle = () => <div className="w-24 h-24 bg-red-500 rounded-full"></div>;
const Square = () => <div className="w-24 h-24 bg-blue-500"></div>;
const Triangle = () => <div className="triangle"></div>;
const Trapezoid = () => <div className="trapezoid"></div>;
const Hexagon = () => <div className="hexagon"></div>;
const Heptagon = () => <div className="heptagon"></div>;

// VISUAL DATA
export const visualData = {

    // HIGHLIGHTS BG
    highlight: undefined,

    // GABOR DATA
    gabor: [ {  
        frequency: 5,
        orientation:0,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    {  
        frequency: 5,
        orientation:45,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    {  
        frequency: 5,
        orientation:90,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    {  
        frequency: 5,
        orientation:135,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    {  
        frequency: 5,
        orientation:180,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    {  
        frequency: 5,
        orientation:225,
        initialPhase: 5,
        size: 100,
        speed: 5,
    }, 
    ],

    // SHAPES DATA
    
    shapes: {
                circle: <Circle />,
                square: <Square />,
                triangle: <Triangle />,
                trapezoid: <Trapezoid />,
                hexagon: <Hexagon />,
                heptagon: <Heptagon />,
            },
                    


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
