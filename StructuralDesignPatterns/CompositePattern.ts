//A file system where a folder can contain both files and other folders.
// Component Interface
interface FileSystemComponent {
    showDetails(): void;
  }
  
  // Leaf
  class File implements FileSystemComponent {
    constructor(private name: string) {}
  
    showDetails() {
      console.log(`File: ${this.name}`);
    }
  }
  
  // Composite
  class Folder implements FileSystemComponent {
    private children: FileSystemComponent[] = [];
  
    constructor(private name: string) {}
  
    add(component: FileSystemComponent) {
      this.children.push(component);
    }
  
    showDetails() {
      console.log(`Folder: ${this.name}`);
      this.children.forEach(child => child.showDetails());
    }
  }
  
  // Client Code
  const file1 = new File("file1.txt");
  const file2 = new File("file2.txt");
  const folder = new Folder("MyFolder");
  folder.add(file1);
  folder.add(file2);
  folder.showDetails();
  