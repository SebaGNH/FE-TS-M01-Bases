"use strict";
(() => {
    var _a, _b;
    const batman = 'Batman';
    const linternaVerde = "Lintarna's Verde"; // Apostrofe '
    const linternaGreen = 'Linternta\'s Verde'; // Escapamos apostrofe
    console.log(batman[2]); // t
    console.log((_a = batman[20]) === null || _a === void 0 ? void 0 : _a.toUpperCase()); // undefined
    // si es indefinido muestra or
    console.log(((_b = batman[20]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No está'); // No está
})();
