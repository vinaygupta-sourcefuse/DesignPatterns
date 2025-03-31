interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Paid ${amount} using Credit Card.`);
    }
  }
  
  class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Paid ${amount} using PayPal.`);
    }
  }
  
  class ShoppingCart {
    constructor(private paymentMethod: PaymentStrategy) {}
  
    checkout(amount: number): void {
      this.paymentMethod.pay(amount);
    }
  }
  
  // Usage
  const cart = new ShoppingCart(new PayPalPayment());
  cart.checkout(100); // Output: Paid 100 using PayPal.
    