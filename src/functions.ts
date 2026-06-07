function makeCoffee(type:string,cups:number){
    console.log(`Make ${cups} of ${type} coffee`)
    
}

makeCoffee("Latte",2);

function getCoffee():number{
    return 2;
}

function getOrder(order:string){
    if(!order)return null;
    return order;
}

//loggerFunctions

function logCoffee():void{
    console.log("Grab your cup of coffee");
}

//optional type

// function coffee(type?:string){

// }

function coffee(type:string = "Latte"){

}


function createChai(order:{
    name: string,
    price: number,
    ingredients: string[]
}):number{
    return 2;
}