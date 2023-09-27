
const skills:string[] = ['Atcar', 'Defender', 'Curar']

interface Personaje{
    name:string;
    hp:number;
    skills:string[];
    origen?:string;
}

const eleven: Personaje = {
    name: 'Once',
    hp: 100,
    skills: ['Atacar', 'Defender', 'Curar'],
}

eleven.origen = 'Xochi';

console.table(eleven);













export{};