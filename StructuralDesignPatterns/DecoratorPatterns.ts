//A coffee shop where we can dynamically add extra features (milk, sugar) to a coffee.

// Component Interface
interface Coffee {
    getCost(): number;
    getDescription(): string;
  }
  
  // Concrete Component
  class SimpleCoffee implements Coffee {
    getCost() {
      return 5;
    }
  
    getDescription() {
      return "Simple Coffee";
    }
  }
  
  // Decorator
  class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
  
    getCost() {
      return this.coffee.getCost() + 2;
    }
  
    getDescription() {
      return this.coffee.getDescription() + ", Milk";
    }
  }
  
  // Client Code
  let coffee: Coffee = new SimpleCoffee();
  coffee = new MilkDecorator(coffee);
  console.log(`${coffee.getDescription()} - $${coffee.getCost()}`);
  