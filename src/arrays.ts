const coffeeTypes: string[] = ["latte","cappucino","expresso"];
const coffeePrice: number[] =[2,7,10];

const rating: Array<number>= [5.0,6.5];

type Coffee = {
    name: string,
    price: number
}

const menu: Coffee[] = [
    {name:"Latte", price:30},
     {name:"Expresso", price:35},
]

const city: readonly string[] = ["Pune","Delhi"];

// city.push("Chennai");

//2d array

const table: number[][] = [
    [1,2,3],
    [3,4,5]
]

