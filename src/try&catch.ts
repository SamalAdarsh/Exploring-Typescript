try{}
catch(error){

    if(error instanceof Error){
         console.log(error.message);
    }
   
    console.log("Error:", error);

}


//More Types

const data:unknown = "Good Morning";
const strData: string = data as string;

type Role= "admin" | "user" | "superadmin";

function assignRole(role:Role):void{

    if(role == "admin") {
        console.log("Redirect to admin dashboard");
        return;
    }

     if(role == "user") {
        console.log("Redirect to user dashboard");
        return;
     }

     role;
}