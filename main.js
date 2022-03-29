const person = {
    firstName: `Daniel`,
    lastName: `Sawyer`,
    age: 24
}

// // console.log(person.firstName);
// // console.log(person[`lastName`]);

// const meal = {

//     appetizer: `cheeze stick`,
//     entree: `meatloaf`,
//     dessert: `icecream`,
//     drink:`sprite`
// }
// //new variable that copys the dessert property from the meal object
// const {dessert} = meal
// // console.log(dessert);

// const {appetizer,entree} = meal
// // console.log(appetizer, entree, dessert);

// // gives drink a nickname/Aliasing/destructuring 
// const{drink: myDrink} = meal
// // const myDrink = meal.drink
// // console.log(myDrink);


// const{entree: myEntree, appetizer:myAppetizer, dessert: myDessert} = meal

// // console.log(myEntree, myAppetizer, myDessert);

// for (const key in person) {
//     // console.log(person[key]);
//     // console.log(key, person[key]);



// }



person.job = `coding`
// console.log(person.job);
person[`pet`] = `Dog`
// console.log(person.pet);

delete person.pet



class Dog {
    constructor(dogName, dogBreed, dogAge){
        /*
        let this = {}
        */
        this.name = dogName;
        this.Breed = dogBreed;
        this.age = dogAge
        this.toys = []

    }
    greeting(){
        console.log(`Hi my name is ${this.name} and I am a ${this.age} year old ${this.Breed}`);
    }

    addToy(toys){
        this.toys.push(toys)
    }
}
const lassie = new Dog(`lassie`, `collie`, 10)
const beethoven = new Dog(`beethoven`,`st.bernard`,12)
// lassie.greeting()
lassie.addToy(`rope`)
// console.log(lassie);
// beethoven.greeting()

class Puppy extends Dog{
    constructor(dogAge,dogBreed,dogName, puppyTrainingLevel){
    super(dogAge, dogBreed, dogName)

    this.trainingLevel = puppyTrainingLevel
}

levelUp(num){
    this.trainingLevel += num
}
greeting(){
    super.greeting()
    console.log(`And I am a puppy!`);
}
}

const leo = new Puppy(`leo`, `labradoodle`, 1, 0)

// console.log(leo);
leo.greeting()
leo.levelUp(2)
console.log(leo);