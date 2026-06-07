enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const cup = CupSize.LARGE;

enum Status{
    PENDING = 100,
    SUCCESS, //101
    FAILED //102
}

//it by defaults assigns value to rest

enum CoffeeType {
    LATTE = "Latte",
    EXPRESSO ="Expresso"

}

function makeCoffee (type:CoffeeType){
    console.log(`Make ${type} coffee`)
}

makeCoffee(CoffeeType.EXPRESSO);
// makeCoffee("Latte");   <--- Argument of type '"Latte"' is not assignable to parameter of type 'CoffeeType'.


enum RandomEnum{
    ID = 1,
    NAME= 'Adarsh'
}

const enum sugarLevel{
LOW = 1,
MID = 2,
HIGH = 3
}


const s = sugarLevel.HIGH;

