"use strict";
(() => {
    let avengers;
    console.log(avengers); // undefined
    const villans = 20;
    console.log({ villans }); // nombre de la variable con su valor
    const companieros = Number('123');
    console.log({ companieros }); //companieros: 123
    const noEsUnNumero = Number('123B');
    //NaN es considerado un número
    console.log({ noEsUnNumero }); // noEsUnNumero: NaN
})();
