// callback-2.js


// Écrivez une fonction newArray qui prend 2 paramètres : arr et callback.
// Ici, arr est un tableau de nombres et callback est une fonction qui prend les éléments de arr comme 
// paramètre et renvoie un nouveau tableau basé sur la condition.

function newArray(arr, callbacko) {
    //Todo : votre code va ici
    callbacko;
    let arr1 = [];
    arr.forEach(function callback(x) {
        // La methode "forEach" appelle la fonction "callback(x) => arr1.push(x)" pour chaque élément de arr.
        // Avant d'ëtre intégrer dans l'array arr1, l'élément x de l'array arr doit ëtre transformer par la
        // fonction "callbacko" qui, n'est autre qu'un argument variable de la fonction "newArray".
        // En resumé: pour chaque élément x de l'array arr, arr.forEach(x) => callback(callbacko(x)) =>
        // arr1.push(callbacko(x)) où (suivant le cas): callbacko(x) => (x + 1) || (x * 2) || (x * x)
        arr1.push(callbacko(x));
    })
    return arr1;
}
let arr = [5, 6, 7, 4, 5, 6, 7, 1, 2];
console.log(newArray(arr, (y) => y + 1)); //incrémente tous les éléments du tableau par 1 et, 
// retourne un nouveau tableau [6, 7, 8, 5, 6, 7, 8, 2, 3]
console.log(newArray(arr, (y) => y * 2)); //double chaque élément du tableau et retourne 
// [10, 12, 14, 8, 10, 12, 14,  2, 4]
console.log(newArray(arr, (y) => y * y)); //équerre chaque élément du tableau et retourne
// [25, 36, 49, 16, 25, 36, 49,  1,  4]
// Fonction d'ordre supérieur en JavaScript