function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray("Lattee");
wrapInArray(50);
wrapInArray({ingredeints:"Milk"});

function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b];
}

pair("latte",50);
pair("latte",{ingredeints:"Milk"});

interface Box<T>{
    content: T
}

const numBox: Box<number> = {content: 10};
const strBox: Box<string> = {content: "box"};

interface ApiPromise<T>{
    status:number,
    data: T
}

const res:ApiPromise<{type:string}>={
    status:200,
    data: {type:"latte"}
}

