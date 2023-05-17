"use strict";
(() => {
    function callBatman() {
        //Sin return devuelve undefined
        // return 1; // Si agrego el return se va a quejar
    }
    const limpio = callBatman(); // No devuelve nada, es void al poner ver "limpio"
    console.log(limpio);
    const callSuperman = () => {
        // return true; // Se queja al agregar return true
    };
})();
