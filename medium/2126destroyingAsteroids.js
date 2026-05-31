/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const obj = {};
    let heaviest = 0;

    for (const asteroid of asteroids) {
        heaviest = Math.max(asteroid, heaviest);
    }

    for (const asteroid of asteroids) {
        if (mass >= heaviest) return true;

        if (mass >= asteroid) {
            mass += asteroid;
        } else {
            if (obj[asteroid] === undefined) {
                obj[asteroid] = [asteroid];
            } else {
                obj[asteroid].push(asteroid);
            }
        }
    }

    for (const asteroid in obj) {
        if (mass >= heaviest) return true;
        
        if (mass >= parseInt(asteroid)) {
            while (obj[asteroid].length > 0) {
                let astr = obj[asteroid].pop();
                mass += astr;
            }
        } else {
            break;
        }
    }

    return false;
};

const asteroids = [4,9,23,4];
const mass = 5;

console.log(asteroidsDestroyed(mass, asteroids));