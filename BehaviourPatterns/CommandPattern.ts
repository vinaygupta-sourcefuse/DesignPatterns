interface Command {
    execute(): void;
    undo(): void;
  }
  
  class Light {
    turnOn() {
      console.log("Light is ON");
    }
    turnOff() {
      console.log("Light is OFF");
    }
  }
  
  class LightOnCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.turnOn();
    }
  
    undo(): void {
      this.light.turnOff();
    }
  }
  
  class RemoteControl {
    private command!: Command;
  
    setCommand(command: Command): void {
      this.command = command;
    }
  
    pressButton(): void {
      this.command.execute();
    }
  
    pressUndo(): void {
      this.command.undo();
    }
  }
  
  // Usage
  const light = new Light();
  const lightOn = new LightOnCommand(light);
  const remote = new RemoteControl();
  
  remote.setCommand(lightOn);
  remote.pressButton(); // Output: Light is ON
  remote.pressUndo(); // Output: Light is OFF
  