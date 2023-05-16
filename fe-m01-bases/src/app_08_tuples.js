"use strict";
(() => {
    const hero = ['Dr Strange', 100, true];
    //hero[0] = 50; //Lo marca como error ya que aquí espera un string
    hero[1] = 50;
    hero[2] = false;
    console.log(hero); // Array(3) [ "Dr Strange", 50, false ]
})();
