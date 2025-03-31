interface Observer {
    update(stockPrice: number): void;
  }
  
  class StockObserver implements Observer {
    constructor(private name: string) {}
  
    update(stockPrice: number): void {
      console.log(`${this.name} received stock price update: ${stockPrice}`);
    }
  }
  
  class StockMarket {
    private observers: Observer[] = [];
    private stockPrice: number = 100;
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    setStockPrice(price: number): void {
      this.stockPrice = price;
      this.notifyObservers();
    }
  
    private notifyObservers(): void {
      this.observers.forEach(observer => observer.update(this.stockPrice));
    }
  }
  
  // Usage
  const market = new StockMarket();
  const investor1 = new StockObserver("Investor 1");
  const investor2 = new StockObserver("Investor 2");
  
  market.addObserver(investor1);
  market.addObserver(investor2);
  
  market.setStockPrice(120); // Notifies all investors
  