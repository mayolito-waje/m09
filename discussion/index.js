function Superhero(name, superpower, powerLevel) {
  this.name = name;
  this.superpower = superpower;
  this.powerLevel = powerLevel;
}

const superhero1 = new Superhero('Saitama', 'One Punch', 300000);
console.log(superhero1);
console.log(superhero1.name);
