function mowYard(name, callback) {
    setTimeout(function() {
        console.log(`${name} mowed the yard.`);
        if (callback) {
            callback();
        }
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(function() {
        const stayedAwake = Math.random() > 0.2;
        if (stayedAwake) {
            console.log(`${name} finished using the weed eater.`);
            if (callback) callback();
        } else {
            console.log(`${name} fell asleep after mowing the yard.`)
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(function() {
        const stayedAwake = Math.random() > 0.4;
        if (stayedAwake) {
            console.log(`${name} finished trimming the hedges.`);
            if (callback) callback();
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`)
        }
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(function() {
        const stayedAwake = Math.random() > 0.6;
        if (stayedAwake) {
            console.log(`${name} finished collecting wood.`);
            if (callback) callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`)
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(function() {
        const stayedAwake = Math.random() > 0.8;
        if (stayedAwake) {
            console.log(`${name} finished watering the garden.`);
            if (callback) callback();
        } else {
            console.log(`${name} fell asleep after collecting wood.`)
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, function() {
        weedEat(name, function() {
            trimHedges(name, function() {
                collectWood(name, function() {
                    waterGarden(name, function() {
                        console.log(`${name} finished all the chores!`);
                    });
                });
            });
        });
    });
}

doSummerChores("Sarah");
