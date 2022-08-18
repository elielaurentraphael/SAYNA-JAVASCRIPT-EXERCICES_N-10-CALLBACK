// Créez un fichier for-each-sum.js et résolvez la fonction ci-dessous :

// Ecrivez une fonction `forEachSum` qui accepte en argument un tableau de nombres comme argument
// et retourne la somme totale de tous les nombres.
// Votre fonction doit utiliser la méthode native Array#forEach.

function forEachSum(arr) {
  let som = 0;
  arr.forEach((item) => {
    som += item;
  });
  return som;
}

console.log(forEachSum([10, 3, 5])); // 18
console.log(forEachSum([-6, 7, 9, 4])); // 14
console.log(forEachSum([])); // 0
