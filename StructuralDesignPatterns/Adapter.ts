class OldSystem{
    request():string{
        return "Old System Request";
    }
} 

class NewSystem{
    specificeRequest():string{
        return "New System Request";
    }
}

class Adapter extends OldSystem{
    private newSystem:NewSystem;
    constructor(){
        super(); // Call the parent constructor
        this.newSystem = new NewSystem(); // has a replation
    }

    request():string{
        return this.newSystem.specificeRequest();
    }
}


const adapter = new Adapter()
console.log(adapter.request()) // New Specific Request

