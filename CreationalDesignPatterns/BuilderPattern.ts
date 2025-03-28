class CarPattern{
    constructor(public brand : string, public engine : string, public color : string){}
}

class CarBuilder{
    private brand : string = 'Default';
    private engine : string = 'Petrol';
    private color : string = 'Black';

    setBrand(brand: string): CarBuilder{
        this.brand = brand;
        return this;
    }
    setEngine(engine : string): CarBuilder{
        this.engine = engine;
        return this;
    }
    setColor(color : string): CarBuilder{
        this.color = color;
        return this;
    }
    
    build(): CarPattern{
        return new CarPattern(this.brand, this.engine, this.color);
    }
}

const myNewCar = new CarBuilder().setBrand('BMW').setEngine('Diesel').setColor('White').build();
console.log(myNewCar)
