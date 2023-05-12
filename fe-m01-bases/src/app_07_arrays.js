"use strict";
(() => {
    // Si no lo definimos no aceptaría booleanos
    const numeros = [1, 2, 3, 4, 5, "6", 7, 8, 9];
    console.log(numeros); // Array(9) [ 1, 2, 3, 4, 5, "6", 7, 8, 9 ]
    const villanos = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villanos.forEach(v => console.log(v.toLocaleUpperCase()));
})();
