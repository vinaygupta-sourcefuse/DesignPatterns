//Separates an abstraction from its implementation so that both can evolve independently.
// Implementor Interface
interface Device {
    turnOn(): void;
    turnOff(): void;
  }
  
  // Concrete Implementations
  class TV implements Device {
    turnOn() { console.log("TV is ON"); }
    turnOff() { console.log("TV is OFF"); }
  }
  
  class Radio implements Device {
    turnOn() { console.log("Radio is ON"); }
    turnOff() { console.log("Radio is OFF"); }
  }
  
  // Abstraction
  class RemoteControl {
    constructor(protected device: Device) {}
  
    turnOnDevice() {
      this.device.turnOn();
    }
  
    turnOffDevice() {
      this.device.turnOff();
    }
  }
  
  // Refined Abstraction
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Muting the device...");
    }
  }
  
  // Client Code
  const tvRemote = new AdvancedRemoteControl(new TV());
  tvRemote.turnOnDevice();
  tvRemote.mute();
  