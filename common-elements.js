// Créez un fichier common-elements.js et résolvez la fonction ci-dessous :
// Écrivez une fonction `commonElements` qui accepte deux tableaux en tant que arguments.
// La fonction doit retourner un nouveau tableau contenant les éléments qui se trouvent dans les deux tableaux d'entrée.
// Votre fonction doit utiliser la méthode native Array#filter.

function commonElements(arr1, arr2) {
  let arr = [];
  const filterItems = arr1.filter((item) => {
    if (arr1.includes(item) && arr2.includes(item)) {
      arr.push(item);
    }
  });
  return arr;
}

console.log(commonElements(["a", "b", "c"], ["c", "a"]));
console.log(
  commonElements(["chat", "chien", "souris", "poisson"], ["chien", "rat"])
);
console.log(commonElements(["skip", "jump"], ["swim", "hop"]));
