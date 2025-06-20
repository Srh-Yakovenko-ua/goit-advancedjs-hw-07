class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    public getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person has entered the house.');
      } else {
        console.log('The door is closed. Person cannot enter.');
      }
    }
  
    public abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    public openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is now open.');
      } else {
        console.log('Wrong key! The door remains closed.');
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);
  
  
  export {};