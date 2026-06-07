let coffeeTuples: [string,number];

coffeeTuples=["Latte",2];
// coffeeTuples=[2,"Latte"] Order should be same as data type

let coffeeOrder: [string,number, boolean?];

coffeeOrder=["Latte",2];
coffeeOrder=["Latte",3,true];

//named tuples
const coffeeItems: [name: string,price:number] = ["Latte",25];

//read-only tuples

const location: readonly [number,number] = [33.88,99.01];

let t: [string,number] = ["latte",2];
t.push("expresso");