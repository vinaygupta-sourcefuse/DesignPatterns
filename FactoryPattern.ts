class Car{
    constructor(public name: string){}
}

class CarFactory{
    static createCar(name: string): Car{
        if(name === 'BMW'){
            return new Car('BMW');
        }
        if(name === 'Audi'){
            return new Car('Audi');
        }
        throw new Error('Car not found');
    }
}

const myCar = CarFactory.createCar('BMW');
console.log(myCar.name); // BMW


/**
 * Factory Pattern
 * 
 * Provides a way to create onjects without specifying the exact class
 * 
 * Use Case: Dynaminc object creation based on conditions
 * 
 */