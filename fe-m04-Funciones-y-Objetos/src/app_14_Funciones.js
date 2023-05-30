"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatiSignal); // function
    const heroName = returnName();
    console.log(heroName); // Flash
})();
