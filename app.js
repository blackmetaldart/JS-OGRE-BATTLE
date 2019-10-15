// 1 SYNTAX
// const : alert the system that this value is not to be changed
// myObject : a name for the object
// = : an assignment operator to assign what's inside the curly braces to the location of the object
// {} : curly braces to hold the keys and values for the object

//2 Me
// const me = {};
//
// me.name = "Kristyn";
// me.age = 42;
// me.email = "kristyn@foo.bar";
//
// console.log(me.name);
// me["age"] = 43;
// console.log(me.age);
// me["place of residence"] = "Laurelton";
// console.log(me["place of residence"]);

//3 Slimer
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
//
// console.log(monster.name);
// monster.type = "creature";
// monster.age = 6;
// console.log(monster.type);
// console.log(monster.age);
//
// const introFunction = function(){
//   console.log(`Bleeeehhh!! My name is ${monster.name}! I'm ${monster.age} years old! I'm a ${monster.color} ${monster.type}!`);
// }
//
// monster.sayHello = introFunction;
// monster.sayHello();

// 4 Ogres
const adventurer = {
   name: "Marvel",
   hitPoints: 700,
   attack: 70,
   dmgTaken: null
}

const ogre = {
   name: "Pebble",
   hitPoints: 800,
   attack: null,
   dmgTaken: null
}

const game = {};


game.battle = playGame;


function playGame (adventurer, ogre) {
  console.log(`Welcome the adventurer! ${adventurer.name}!!`);
  console.log(`**crowd cheers**`);
  console.log(`Welcome the MONSTER!`);
  console.log(`**crowd boos ${ogre.name}**`);
  console.log(`Let the battle begin!`);
  console.log(`  `);


  battle(adventurer, ogre);
  console.log(` `);
}

function battle(hero, ogur) {

  while(adventurer.hitPoints > 0 && ogre.hitPoints > 0) {

    ogre.attack = Math.ceil(Math.random() * 100);
    ogre.dmgTaken = adventurer.attack;
    ogre.hitPoints -= ogre.dmgTaken;
    console.log(`${adventurer.name} does ${ogre.dmgTaken} damage!`);
    console.log(`${ogre.name} has ${ogre.hitPoints} remaining!`);

    adventurer.dmgTaken = ogre.attack;
    adventurer.hitPoints -= adventurer.dmgTaken;
    console.log(`${ogre.name} does ${adventurer.dmgTaken} damage!`);
    console.log(`${adventurer.name} has ${adventurer.hitPoints} remaining!`);
    console.log(' ');
  };

  if(adventurer.hitPoints > 0){
    console.log(`${adventurer.name} is the winner!! Stick around for the next round!`);
  } else {
    console.log(`New game!! Grab your pitchforks!! Bring me an ogre head!!`);
  };
}

game.battle = playGame;

playGame(adventurer, ogre);
