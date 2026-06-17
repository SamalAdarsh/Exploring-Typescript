class Coffee{
    type: string;
    price: number;
 
    constructor(type:string,price:number){
        this.type = type;
        this.price = price;
    }

}

const latteCoffee = new Coffee("Latte",30);
latteCoffee.type = "Latte";


class Coffee1{
    public type: string = "Latte";
    private secretIngredient: string = "Desi Milk";

    reveal(){
        return this.secretIngredient;
    }
 
}

const c = new Coffee1();
c.reveal();



//protected 

class Shop{
    protected shopName =  "Coffee Corner";
}

class Branch extends Shop{
    getName(){
        return this.shopName;
    }
}

const c1 = new Branch();

c1.getName();

//ReadOnly

class Cup{
    readonly capacity: number = 250;

    constructor(capacity:number){
        this.capacity = capacity;
    }
}


//Getters & Setters

class ModernCoffee{
    private _sugar:number = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too Sweet");
        this._sugar = value;
    }
}

const c3 = new ModernCoffee();
c3.sugar=3;

class Coffee4{
    static shopName = "Coffee Club";

    constructor(public flavour:string){}
}

abstract class Drink{
    abstract make(): void;
}

class MyCoffee extends Drink{
    make(){
        console.log("Enjoy the coffee");
    }
}

//Compositon

class Heater{
    heat(){

    }
}

class CoffeeMaker{
    constructor(private heater:Heater){

    }

    make(){
        this.heater.heat
    }
}