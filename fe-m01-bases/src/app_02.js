"use strict";
(() => {
    if (false) { // Tipos de datos
        const num1 = 10;
        console.log(typeof num1); // number
        let cadena2 = "Canelo";
        console.log(typeof cadena2); // number
        let isOpen = true;
        console.log(typeof isOpen); // boolean
    }
    if (false) { // Declaración de funciones
        function sayHello(mensaje) {
            console.log(mensaje);
            // mensaje. <-- con el punto podemos agregar la ayuda con los métodos y propiedades de los string
        }
        sayHello('Hola');
    }
})();
