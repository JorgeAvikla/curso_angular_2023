

function addNumber( a:number ,b:number ) {
    return a+b;
}

const addNumbersArrow = (a:number,b:number):string => {
    return `${a+b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2):number {
    return firstNumber *base;
}





//  const result: number = addNumber(1, 2)
//  const result2: string = addNumbersArrow(1, 2)
//  const multiplyResult: number = multiply(10)
//  console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: ()=> void;
}
const  healCharacter = (character:Character, amount:number)=>{
        character.hp += amount;
    
}

const eleven: Character = {
    name :'Once',
    hp :2,
    showHp(){
        console.log(`Punto de vida ${ this.hp }`)
    }
}

healCharacter(eleven,1);
healCharacter(eleven,1);

eleven.showHp()









export{};