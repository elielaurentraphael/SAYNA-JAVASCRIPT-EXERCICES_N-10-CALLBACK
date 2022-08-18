// callback-3.js

// Pratique, les méthodes de tableau suivantes,
// Filtre, map, find, forEach, some, every, reduce, includes

const lists = [
  { nom: "Ordinateur", prix: 200 },
  { nom: "TV", prix: 300 },
  { nom: "Livre", prix: 100 },
  { nom: "Téléphone", prix: 600 },
  { nom: "Souris", prix: 50 },
  { nom: "Clavier", prix: 75 },
  { nom: "Voiture", prix: 2000 },
];

console.log(""); // Aération du Terminal
console.log("const lists =");
console.log(lists);

// Écrivez une fonction pour chaque méthode de tableau et présentez la solution.

// filter()
// renvoie un nouveau tableau
const filterItems = lists.filter((item) => {
  return item.prix < 100;
});
console.log(""); // Aération du Terminal
console.log("// (methode filter())");
console.log("// Liste des marchandises dont le prix est inferieur à 100 :");
console.log("filterItems =");
console.log(filterItems);
/* [ { nom: 'Souris', prix: 50 }, { nom: 'Clavier', prix: 75 } ] */

// map()
// renvoie un nouveau tableau
console.log("");
console.log("// (methode map()). Liste des prix :");
const listPrix = lists.map((items) => {
  return items.prix; //liste des prix
});
console.log("listPrix =");
console.log(listPrix);
/*[200, 300, 100, 600,  50,  75, 2000];*/

// find()
// La méthode find() renvoie la valeur du premier élément qui réussit un test.
console.log("");
const found = listPrix.find((prix) => prix < 200);
console.log("// (methode find()) prix inférieur à 200 :");
console.log(found); // 100

// forEach()
// La methode forEach() appelle une fonction pour chaque élément du tableau
// On va utiliser le tableau listPrix défini plus haut
listPrix;
listPrix.forEach((item, index, arr) => {
  arr[index] = item * 2;
});
console.log("");
console.log("// (methode forEach())");
console.log("listPrix =");
console.log(listPrix); // [400, 600, 200, 1200, 100, 150, 4000]

// some()
// La méthode some() teste si au moins un élément du tableau réussit le test implémenté par la fonction fournie.
console.log("\n// (methode some())");
listPrix;
const auMoins = (item) => item === 4000;
console.log(listPrix.some(auMoins)); // true
console.log(
  "le teste comfirme qu'il y a au moins un prix qui est égale à 4000"
);

// every()
// La méthode every() teste si tous les éléments du tableau réussissent le test
console.log("\n// (methode every())");
const multipleDeDix = (item) => !(item % 10);
listPrix;
console.log(listPrix.every(multipleDeDix)); // true
console.log("Tous les éléments du tableau réussissent le test");

// reduce()
/*
La méthode reduce() exécute une fonction de rappel " réducteur » fournie par l’utilisateur sur chaque élément du tableau, dans l’ordre, en transmettant la valeur de retour du calcul sur l’élément précédent. Le résultat final de l’exécution du réducteur sur tous les éléments du tableau est une valeur unique.

La première fois que le rappel est exécuté, il n’y a pas de « valeur de retour du calcul précédent ». Si elle est fournie, une valeur initiale peut être utilisée à sa place. Sinon, l’élément de tableau à l’index 0 est utilisé comme valeur initiale et l’itération commence à partir de l’élément suivant (index 1 au lieu d’index 0).
*/
console.log("");
listPrix;
// Sans valeur initiale
const sansValeurInitiale = listPrix.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log("// (methode reduce())");
console.log("sansValeurInitiale :");
console.log(sansValeurInitiale);
// affichage: 6650

console.log("");
listPrix;
function reducto(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(
    `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  console.log("");
  return returns;
}
console.log(listPrix.reduce(reducto));

// includes()
// La méthode includes() détermine si un tableau inclut une certaine valeur parmi ses entrées
console.log("");
console.log("// (methode includes())");
listPrix;
console.log(listPrix.includes(300)); // false
console.log(listPrix.includes(4000)); // true
