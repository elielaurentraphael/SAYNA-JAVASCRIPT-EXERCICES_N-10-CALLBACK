// callback-3.js

// Pratique, les méthodes de tableau suivantes,
// Filtre, map, find, forEach, some, every, reduce, includes


const lists = [
    { nom: 'Ordinateur', prix: 200 },
    { nom: 'TV', prix: 300 },
    { nom: 'Livre', prix: 100 },
    { nom: 'Téléphone', prix: 600 },
    { nom: 'Souris', prix: 50 },
    { nom: "Clavier", prix: 75 },
    { nom: 'Voiture', prix: 2000 },
]


// Écrivez une fonction pour chaque méthode de tableau et présentez la solution.
// Exemple :
// # filter.js

const filterItems = lists.filter((item) => {
    return item.prix < 100;
});
console.log(lists);
console.log(filterItems);

const filtra = lists.filter((zam) => {
    return zam.nom.includes("i");
});
console.log(filtra);

const lista = lists.map((zom) => {
    return zom.prix * 1.2;
});
console.log(lista);