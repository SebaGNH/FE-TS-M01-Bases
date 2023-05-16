"use strict";
(() => {
    //Se usa para que se respeten las opciones
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // Al poner el punto nos da las opciones "min, medium, max"
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio); // 2 <--Nos da valores como un arreglo
    console.log(AudioLevel); // Object { 1: "min", 2: "medium", 10: "max", min: 1, medium: 2, max: 10 }
    let audioActual = AudioLevel.max; // contiene al 10
    console.log(audioActual); // 10
})();
