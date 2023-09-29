function classDecorator<T extends { new(...args: any[]): {} }>(
    constuctor: any
) {
    return class extends constuctor {
        newProperty = 'New Property';
        hello = 'override'
    }
}

@classDecorator
class SuperClass {
    public myProperty: string = '123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);