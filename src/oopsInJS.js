// Class
class Developer {}

//Objects
const dev1 = new Developer();
const dev2 = new Developer();

//Constructor function & This

class Dev {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }

  introduce() {
    return `Hi, my name is ${this.name} & my tech stack is ${this.stack}`;
  }
}

const adarsh = new Dev("Adarsh","MERN");
console.log(adarsh.introduce());

//Public Private Get Set

class Employee{

    #salary;

    constructor(name, initialSalary){
        this.name = name;
        this.#salary = initialSalary;

    }

    get salary(){
        return `Rs. ${this.#salary}`;
    }

    set salary(newAmount){
        if(newAmount < this.#salary) console.log("Can't deduct the salary");
        else this.#salary = newAmount;
    }

}

const emp = new Employee("Adarsh",50000);
emp.salary = 55000;
emp.salary = 40000;

console.log(emp.salary);


//Static
class DatabasePool{
    
    static activeConnections = 0;
    
    constructor(){
        DatabasePool.activeConnections++;
    }

    static getStatus(){
        return `currect active connetions: ${DatabasePool.activeConnections}`
    }
}

const conn1 = new DatabasePool();
const conn2 = new DatabasePool();
console.log(DatabasePool.getStatus());


//Encapsulation

class UserAccount{

    #password;

    constructor(userName,password){
        this.userName = userName;
        this.#password = password;
    }

    login(passwordAttempted){
        if(passwordAttempted == this.#password) return `Welcome Back, ${this.userName}`;
        else return `Access denied`;
    }
}

const user1 = new UserAccount("adarsh006","adarsh@123");

console.log(user1.login("adarsh@123"));
console.log(user1.login("adarsh@1234")); //Access Denied

//Abstraction

class MovieRecommendationEng{

    //complex method hiding
    #watchHistory(){
      return `show the watch history of the user`;
    }

    #imdbLatest(){
      return `give data of the latest movies`;
    }

    //simple method showing
    getMovieSuggestions(){
      this.#watchHistory();
      this.#imdbLatest();
      return `Check out this movie: Dhurandhar`;
    }
}

const user2 =  new MovieRecommendationEng();

console.log(user2.getMovieSuggestions());


//Inheritance

class Emp{

    constructor(name){
        this.name = name;
    }

    clockIn(){
       return `${this.name} clocked in for the day`;
    }
}


class FSDevloper extends Emp{

    constructor(name,language){
        super(name);
        this.language = language;

    }

    writeCode(){
        return `${this.name} has written code in ${this.language}`
    }
}

const dev3 =  new FSDevloper("Adarsh", "Javascript");

console.log(dev3.clockIn());
console.log(dev3.writeCode());

//Polymorphism

class MediaPlayer{

    play(){
        return `media is being played`;
    }
}

class VideoPlayer extends MediaPlayer{

    play(){
        return `video is being played`;
    }
}

class AudioPlayer extends MediaPlayer{

    play(){
        return `song is being played`;
    }
}

const video = new VideoPlayer();
const song = new AudioPlayer();

console.log(video.play());
console.log(song.play());