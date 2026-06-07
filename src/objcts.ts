const coffee = {
    name:"Latte Coffee",
    price: 20,
    isHot: true
}

let coffee1: {
    name: string,
    price: number,
    isHot: boolean
}

coffee1 = {
    name:"Latte Coffee",
    price: 20,
    isHot: true
}

type CoffeeType = {
    name: string,
    price: number,
    ingredients: string[]
}

const latteCoffee:CoffeeType = {
   name:"Latte Coffee",
    price: 20,
    ingredients: ["milk","coffee powder"]
}


type Cup = {quantity:string};

let smallCup:Cup = {quantity:"200 ml"}
let bigCup ={quantity:"400ml",isHot:true}

smallCup = bigCup;


type Strong = {stronngLevel:number};

const coffee2 = {strongLevel:3,isHot:true};
//const coffee3:Strong = coffee2;

type User={
    username: string,
    password: string
}

const u:User = {
    username: "adarsh006",
    password:"adarsh123"
}

type Item= {name:string, quantity:number};
type Address={street:string,pin:number}

type Order={
    id: number,
    items: Item[],
    address: Address
}


//PARTIAL

type Coffee = {
    name: string,
    price: number,
    isHot: boolean
}

const updateCoffee = (update:Partial<Coffee>)=>{

    console.log("update coffee with:",update)
}

updateCoffee({price:25});
updateCoffee({name:"latte"});
updateCoffee({});

//REQUIRED

type Coffee2 = {
    name: string,
   quantity:number
}

const placeOrder = (order: Required<Coffee2>)=>{
    console.log(order);
}

placeOrder({
    name:"Latte Coffee",
    quantity:2
})


//PICK

type Coffee3 = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicCoffeeInfo = Pick<Coffee3, "name" | "price">;

const coffeeInfo = {
    name: "expresso",
    price: 30
}


//OMIT

type Coffee4 = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type newOrder = Omit<Coffee4,"isHot" | "ingredients">

const coffeeOrder = {
    name: "expresso",
    price: 30
}