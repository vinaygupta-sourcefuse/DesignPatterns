interface Mediator {
    sendMessage(message: string, sender: Colleague): void;
  }
  
  class ChatRoom implements Mediator {
    private users: Colleague[] = [];
  
    addUser(user: Colleague): void {
      this.users.push(user);
    }
  
    sendMessage(message: string, sender: Colleague): void {
      this.users.forEach(user => {
        if (user !== sender) { 
          user.receiveMessage(message);
        }
      });
    }
  }
  
  class Colleague {
    constructor(private name: string, private mediator: Mediator) {}
  
    sendMessage(message: string): void {
      console.log(`${this.name} sends: ${message}`);
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message: string): void {
      console.log(`${this.name} received: ${message}`);
    }
  }
  
  // Usage
  const chat = new ChatRoom();
  const user1 = new Colleague("Alice", chat);
  const user2 = new Colleague("Bob", chat);
  
  chat.addUser(user1);
  chat.addUser(user2);
  
  user1.sendMessage("Hello Bob!");
  // Output: Bob received: Hello Bob!
  