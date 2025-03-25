export class SingletonService{
    private static instance: SingletonService;

    private constructor() { }
    
    public static getInstance(): SingletonService {
        if (!SingletonService.instance) {
            SingletonService.instance = new SingletonService();
        }
        return SingletonService.instance;
    }
}

/*
* LAZY INITIALIZATION

 * make a private, static varibale to hold the instance of the class so that for accessing it no need to create an instance of the class
 * make a private constructor so that no one can create an instance of the class
 * create a static, public method so that static private variable of the class can be access it 
 * for calling new keyrord only once put a check if the instance is already created or not
 */

