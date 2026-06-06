
//Type Narrowing using typeOf

function getPlayers(kind: string|number){
    if(typeof kind == "string"){
      return `player type ${kind}`;
    }

    return `Players needed`;
}

// Truthiness Narrowing

function players(playing?: string){
    if(playing){
        return `he is ${playing}`;
    }

    return `better luck next time`

}

//Exhaustive Checks

function cricketer(role: 'bowler'|'batsman'|'allrounder'|number){

    if(role == 'bowler'){
        return `he's a bowler`;
    }

    if(role == 'batsman'){
        return `he's a batsman`;
    };

      if(role == 'allrounder'){
        return `he's a allrounder`;
    };

    return `No role of the player yet`;
}

//instanceOf guards

class Indian{

    plays(){
        return "He plays for India";
    }
};

class Australian{

    plays(){
        return "He plays for Australia";
    }
};

function cricketerInt(country: Indian|Australian){
    if(country instanceof Indian){
        return country.plays();
    }

  return country.plays();
};