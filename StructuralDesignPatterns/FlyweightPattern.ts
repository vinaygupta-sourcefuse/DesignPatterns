//Minimizes memory usage by sharing common data among multiple objects.
//A text editor where characters share the same font style.

class Character {
    constructor(private char: string, private font: string) {}
  
    display() {
      console.log(`Character: ${this.char}, Font: ${this.font}`);
    }
  }
  
  // Flyweight Factory
  class CharacterFactory {
    private characters: Map<string, Character> = new Map();
  
    getCharacter(char: string, font: string) {
      const key = char + font;
      if (!this.characters.has(key)) {
        this.characters.set(key, new Character(char, font));
      }
      return this.characters.get(key)!;
    }
  }
  
  // Client Code
  const factory = new CharacterFactory();
  const charA1 = factory.getCharacter("A", "Arial");
  const charA2 = factory.getCharacter("A", "Arial");
  console.log(charA1 === charA2); // True (same instance)
  