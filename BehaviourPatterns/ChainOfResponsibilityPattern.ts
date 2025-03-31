abstract class Handler {
    protected nextHandler?: Handler;
  
    setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    handleRequest(request: string): void {
      if (this.nextHandler) {
        this.nextHandler.handleRequest(request);
      }
    }
  }
  
  class AuthenticationHandler extends Handler {
    handleRequest(request: string): void {
      console.log("Authentication successful.");
      super.handleRequest(request);
    }
  }
  
  class LoggingHandler extends Handler {
    handleRequest(request: string): void {
      console.log("Logging request:", request);
      super.handleRequest(request);
    }
  }
  
  // Usage
  const auth = new AuthenticationHandler();
  const logger = new LoggingHandler();
  
  auth.setNext(logger);
  
  auth.handleRequest("User login"); 
  // Output:
  // Authentication successful.
  // Logging request: User login
  