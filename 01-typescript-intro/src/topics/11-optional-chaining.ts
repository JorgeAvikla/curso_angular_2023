 export interface Passenger{
    name: string;
    children?: string[];
 }

 const passenger1: Passenger = {
     name: 'Jorge'
 }

 const passenger2: Passenger = {
    name: 'Gisela',
    children: ['jorge', 'Leila']
}

const returnprintChildren = (passenger: Passenger):number => {
    const howManyChildren = passenger.children?.length || 0;
    // if(!passenger.children) return 0;
    // const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnprintChildren(passenger1)