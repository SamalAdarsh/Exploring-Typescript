let passkey: string|number = 4;

passkey = 'Adarsh';

let apiStatus: 'pending'|'success' | 'fail' = 'pending';

const orders = ['7','48','18','10'];

let currentOrder; //any datatype

for(let order of orders){
    if(order == '10'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);