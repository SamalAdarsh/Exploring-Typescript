type CoffeeOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// function makeCoffee(order:{type: string, sugar:number, strong: boolean}){
//   console.log(order);
// }

function makeCoffee(order: CoffeeOrder) {
  console.log(order);
}

// function serveCoffee(order:{type: string, sugar:number, strong: boolean}){
//   console.log(order);
// }

function serveCoffee(order: CoffeeOrder) {
  console.log(order);
}

type CoffeeRecpie = {
  water: number;
  milk: number;
};

class MyCoffee implements CoffeeRecpie {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large";

interface CupSize {
  size: "small" | "large";
}

class coffeeSize implements CupSize {
  size: "small" | "large" = "large";
}

//type Response = {ok:true} | {ok:false};

interface Response {
  ok: true | false;
}

class myRes implements Response {
  ok= true;
}

type CoffeeType = "latte" | "cappucino" | "expresso";

function orderCoffee(t:CoffeeType){
   console.log(t);
}

type BaseCoffee = {coffeePowder:number};
type Extra = {strong:boolean};

type LatteCoffee = BaseCoffee & Extra;

const cup:LatteCoffee = {
    coffeePowder: 2,
    strong: true,
}



type User = {
    name: string,
    bio?: string,
}

const u1:User = {
    name:"Adarsh",
}

const u2:User = {
    name:"Adarsh",
    bio:"Hello",
}


type Config = {
    readonly appName: string,
    version: number,
}

const cfg: Config ={
    appName: "To-Do-App",
    version:1,
}

// cfg.appName = "Weather-App";