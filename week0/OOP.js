class Animal {
    constructor(name, lang){
        this.name = name;
        this.lang = lang;
    }
    speak() {
        console.log(`${this.name} is speaking ${this.lang}`)
    }
}

let dog = new Animal("Dog", "Bow bow")
let cat = new Animal("Cat", "mew mew")
dog.speak()
cat.speak()