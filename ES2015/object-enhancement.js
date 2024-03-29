//Write in ES2015
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//Write in ES2015
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

//Write in ES2015
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor2 = {
  firstName: "Colt",
  sayHigh() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function ('bark', 'bleet)
// noise: a string to be printed when above function is called ('Woooof!', 'BAAAAaaaa')
// Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
