function mowYard(name) {
    const mowYard = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
    return mowYard;
}

function weedEat(name) {
    const weedEat = new Promise ((resolve, reject) => {
        const success = Math.random() > 0.2; 
    setTimeout(() => {
      if (success) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
  return weedEat;
}

function trimHedges(name) {
    const trimHedges = new Promise ((resolve, reject) => {
        const success = Math.random() > 0.4; 
    setTimeout(() => {
      if (success) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
  return trimHedges;
}

function collectWood(name) {
    const collectWood = new Promise ((resolve, reject) => {
        const success = Math.random() > 0.4; 
    setTimeout(() => {
      if (success) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
  return collectWood;
}
    
function waterGarden(name) {
    const waterGarden = new Promise ((resolve, reject) => {
        const success = Math.random() > 0.4; 
    setTimeout(() => {
      if (success) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
  return waterGarden;
}

function doSummerChores(name) {
    return mowYard(name)
    .then (result => {
         console.log(result);
         return weedEat(name);
    })
    .then (result => {
        console.log(result);
        return trimHedges(name);
    })
    .then (result => {
        console.log(result);
        return collectWood(name);
    })
    .then (result => {
        console.log(result);
        return waterGarden(name);
    })
    .then(result => {
      console.log(result);
      console.log(`${name} finished all the chores.`)
    })  
    .catch(error => {
        console.log(error);
        console.log(`${name} could not finish all the chores.`)
    })
}

doSummerChores("Sarah");