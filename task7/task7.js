        function getRandom(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        var fieldSize = 10; // Field size constant

        // Soldier 1 object

        class soldierClass {
            constructor(name) {
                this.name = name;
                this.health = 100;
                this.currentCoordinateX = 0;
                this.currentCoordinateY = 0;
                this.shotCoordinateX = 0;
                this.shotCoordinateY = 0;
            };

            static spawn(sol) {
                sol.currentCoordinateX = getRandom(0, fieldSize);
                sol.currentCoordinateY = getRandom(0, fieldSize);
                console.log(sol.name + ' spawned at [' + sol.currentCoordinateX + '; ' + sol.currentCoordinateY + ']');
                return 0;
            } 
            static shot(sol) {
                sol.shotCoordinateX = getRandom(0, fieldSize);
                sol.shotCoordinateY = getRandom(0, fieldSize);
                console.log(sol.name + ' shotted [' + sol.shotCoordinateX + '; ' + sol.shotCoordinateY + ']');
                return 0;
            }
            static hurt(sol) {  
                sol.health -= 25;
                console.log(sol.name + ': Я ранен!' + sol.health);
                return 0;
            }
        }

    let soldier1 = new soldierClass("Soldier1");
    var soldier2 = new soldierClass("Soldier2")
    soldierClass.spawn(soldier1);
    soldierClass.spawn(soldier2);
    setInterval(function () {
        if (soldier1.health > 0 && soldier2.health > 0) {
            soldierClass.shot(soldier1);
            if (soldier1.shotCoordinateX === soldier2.currentCoordinateX && soldier1.shotCoordinateY === soldier2.currentCoordinateY) {
                soldierClass.hurt(soldier2);
            }
            soldierClass.shot(soldier2);
            if (soldier2.shotCoordinateX === soldier1.currentCoordinateX && soldier2.shotCoordinateY === soldier1.currentCoordinateY) {
                soldierClass.hurt(soldier1);
            }

            if (soldier1.health <= 0) {
                console.log(soldier2.name + ' is winner!');
            } else if (soldier2.health <= 0) {
                console.log(soldier1.name + ' is winner!');
            }
        }
    }, 50);

