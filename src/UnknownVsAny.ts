let value: any;

value = "Adarsh";
value= 777;
value= 1.3;
value.toUpperCase();

let newValue: unknown;

newValue = "Adarsh";
newValue= 777;
newValue= 1.3;
//newValue.upperCase();

if(typeof newValue == "string"){
    newValue.toUpperCase();
}