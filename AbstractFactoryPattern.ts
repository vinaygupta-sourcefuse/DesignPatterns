interface CarInterface{
    drive(): void;
}

class Sedan implements CarInterface {
     drive(){
        console.log('Driving a Sedan')
     }
}

class SUV implements CarInterface {
    drive(){
        console.log('Driving a SUV')
    }
}

abstract class CarFactoryAbstract{
    abstract createCar(): CarInterface;
}

class SedanFactory extends CarFactoryAbstract{
    createCar(): CarInterface{
        return new Sedan();
    }
}

class SUVFactory extends CarFactoryAbstract{
    createCar(): CarInterface{
        return new SUV();
    }
}

const sedanFactory = new SedanFactory();
const sedan = sedanFactory.createCar();
sedan.drive(); // Driving a Sedan


/** Abstract Factory Pattern
 * 
 * Factory of Factories
 * creates related objects without specifying the exact classes
 * 
 * Use Case: Create related objects without specifying the exact class
 * 
 */