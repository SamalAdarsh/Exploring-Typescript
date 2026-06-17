interface Coffee{
  flavour: string;
  price: number;
  milk?:boolean
}

const latte:Coffee={
    flavour: "lattee",
    price: 30
}

interface Shop{
    readonly id: number;
    name: string;
}

const s:Shop = {
    id: 1,
    name: "Coffee Club",
}

// s.id = 5;

interface Discount{
    (price:number): number;
}

const apply50: Discount = (p) => p*0.5;

interface Machine{
    start(): void;
    stop(): void
}

const machine: Machine={
    start(){
        console.log("start");
    },

    stop(){
        console.log("stop");
    }
}


//index signature

interface CoffeeRatings{
    [flavour: string]: number;
}

const ratings: CoffeeRatings = {
    latte: 5,
    expresso: 4,
}

interface User{
    name:string
}

interface User{
    age:number;
}

const u: User = {
    name:"Adarsh",
    age:25,
}

interface A {
    a:string
}

interface B{
    b:string
}

interface C extends A,B {}