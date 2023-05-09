function Trainer(name, age, pokemon = [], friends = {}) {
  this.name = name;
  this.age = age;
  this.pokemmon = pokemon;
  this.friends = friends;

  this.talk = function () {
    console.log('Pikachu! I choose you!');
  };
}

const trainer1 = new Trainer('Jake', 12, ['Bulbasaur', 'Charizard']);
const trainer2 = new Trainer('Ash', 10, ['Pikachu']);
trainer2.talk();

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 3;
  this.attack = level;

  this.faint = function () {
    console.log(`${this.name} has fainted.`);
  };
  this.tackle = function (pokemon) {
    if (pokemon.health > 0 && this.health > 0) {
      console.log(
        `${this.name} attacked ${pokemon.name}. ${pokemon.name} has ${pokemon.health} health remaining.`
      );
      pokemon.health = pokemon.health - this.attack;

      if (pokemon.health <= 0) pokemon.faint();
    } else if (this.health <= 0) {
      console.log(`Cannot attack. ${this.name} has fainted`);
    }
  };
}

const pikachu = new Pokemon('Pikachu', 25);
const bulbasaur = new Pokemon('Bulbasaur', 25);

pikachu.tackle(bulbasaur);
pikachu.tackle(bulbasaur);
pikachu.tackle(bulbasaur);
bulbasaur.tackle(pikachu);
