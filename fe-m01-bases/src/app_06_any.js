"use strict";
(() => {
    // Es recomendable usar lo menos posible el any
    // con any tampoco tiene el ayuda "." y ver sus propiedades, podemos usarlas si las conocemos, pero ts no nos ayuda
    let avenger = 123;
    let hero = 'Superman';
    let exist;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0)); // D
    avenger = 150.23256415;
    console.log(avenger.toFixed(2)); // 150.23
    // casting, tratamos el valor como un string y nos muestra sus métodos y propiedades
    console.log(hero.charAt(0)); // S
    // otro tipo de casteo
    console.log(hero.charAt(2)); // p
})();
