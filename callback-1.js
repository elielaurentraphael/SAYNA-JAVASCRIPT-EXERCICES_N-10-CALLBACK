// callback-1.js
console.log('Je vais d\'abord imprimer');
let callback = function() {
    console.log('Je vais attendre 10 secondes et terminer la tâche');
};
setTimeout(callback, 10000); 
// Les 10s sera compter à partir de l'instant où on appelle setTimeout().
// console.log('Je vais attendre 10 secondes et terminer la tâche') s'exécute 10s après
// l'appelle de setTimeout()