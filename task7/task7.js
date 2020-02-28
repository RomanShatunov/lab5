function getRandom(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const FIELD_SIZE = 5;

class SoldierClass {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.currentCoordinates = {
      x: 0,
      y: 0,
    }
    this.shotCoordinates = {
      x: 0,
      y: 0,
    }

  };

  spawn(x, y) {
    this.currentCoordinates.x = x;
    this.currentCoordinates.y = y;
    console.log(this.name + ' spawned at [' + this.currentCoordinates.x + '; ' + this.currentCoordinates.y + ']');
    return 0;
  }
  shot(AnySoldier) {
    if (this.health > 0 && AnySoldier.health > 0) {
      x = this.shotCoordinates.x = getRandom(0, FIELD_SIZE);
      y = this.shotCoordinates.y = getRandom(0, FIELD_SIZE);
      console.log(this.name + ' shotted [' + this.shotCoordinates.x + '; ' + this.shotCoordinates.y + ']');
    }
    return { x, y };
  }

  hurt(shotSoldier, AnySoldier) {
    if (shotSoldier.x === this.currentCoordinates.x && shotSoldier.y === this.currentCoordinates.y && this.health > 0 && AnySoldier.health > 0) {
      this.health -= 25;
      console.log(this.name + ': Я ранен! Оставшееся здоровье:' + this.health);
      if (this.health === 0) {
        console.log(AnySoldier.name + ' is winner!');
      }
    }
    return 0;
  }
}

let soldier1 = new SoldierClass("Soldier1");
let soldier2 = new SoldierClass("Soldier2")

function getRandomCoordinatesWithExclude(excludeX, excludeY) {
  if (excludeX >= 0 && excludeY >= 0) {
    do {
      x = getRandom(0, FIELD_SIZE);
      y = getRandom(0, FIELD_SIZE);
    } while (x != excludeX && y != excludeY)
  }
  else {
    x = getRandom(0, FIELD_SIZE);
    y = getRandom(0, FIELD_SIZE);
  }
  return { x, y }
}

const coordinateSoldier1 = getRandomCoordinatesWithExclude();
const coordinateSoldier2 = getRandomCoordinatesWithExclude(coordinateSoldier1.x, coordinateSoldier1.y)
soldier1.spawn(coordinateSoldier1.x, coordinateSoldier1.y);
soldier2.spawn(coordinateSoldier2.x, coordinateSoldier2.y);
setInterval(function () {

  const shotSoldier1 = soldier1.shot(soldier2);
  soldier2.hurt(shotSoldier1, soldier1);

  const shotSoldier2 = soldier2.shot(soldier1);
  soldier1.hurt(shotSoldier2, soldier2);
}
  , 50);

