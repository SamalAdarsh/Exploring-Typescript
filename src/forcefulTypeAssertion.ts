let response: any = '42';

let numericLength:number = (response as string).length;

type Book ={
name: string;
}

let bookString = '{"name":"Road not taken"}';
let bookObject = JSON.parse(bookString) as Book;


console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;


