//Acts as a placeholder or intermediary for another object to control access.

//A virtual proxy that loads an image only when needed.

interface Image {
    display(): void;
  }
  
  // Real Image
  class RealImage implements Image {
    constructor(private filename: string) {
      console.log(`Loading image: ${filename}`);
    }
  
    display() {
      console.log(`Displaying image: ${this.filename}`);
    }
  }
  
  // Proxy
  class ImageProxy implements Image {
    private realImage?: RealImage;
  
    constructor(private filename: string) {}
  
    display() {
      if (!this.realImage) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
  }
  
  // Client Code
  const image = new ImageProxy("photo.jpg");
  image.display(); // Loads and displays image
  image.display(); // Uses cached image
  