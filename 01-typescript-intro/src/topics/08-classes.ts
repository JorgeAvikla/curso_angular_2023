export class Person {
    constructor(public name: string,
         public adress:string = 'No adress'
        ){}
}

// export class Hero extends Person {
//     constructor(
//         public AlterEgo: string,
//         public age:number,
//         public realName:string,
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero{
    // public person: Person;
    constructor(
        public AlterEgo: string,
        public age:number,
        public realName:string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}
const tony = new Person('Tony','Oaxaca',)
const ironman = new Hero('Tony',22,'SpiterMan', tony)


console.log(ironman);