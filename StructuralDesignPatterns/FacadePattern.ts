//A computer system with multiple components (CPU, Memory, Hard Drive) controlled via a single interface.

class CPU {
    start() { console.log("CPU started"); }
  }
  
  class Memory {
    load() { console.log("Memory loaded"); }
  }
  
  class HardDrive {
    read() { console.log("Hard Drive read"); }
  }
  
  // Facade
  class Computer {
    private cpu = new CPU();
    private memory = new Memory();
    private hardDrive = new HardDrive();
  
    start() {
      this.cpu.start();
      this.memory.load();
      this.hardDrive.read();
      console.log("Computer started!");
    }
  }
  
  // Client Code
  const myComputer = new Computer();
  myComputer.start();
  