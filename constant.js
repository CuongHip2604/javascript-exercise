export const TYPE = "error";

class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sing() {
    return this;
  }
}

export default Animals;
