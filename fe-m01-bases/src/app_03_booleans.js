"use strict";
(() => {
    let isSuperman;
    // console.log(isSuperman); // Variable 'isSuperman' is used before being assigned.
    let isBatman = false;
    console.log(isBatman); // false
    console.log({ isBatman }); // Object { isBatman: false }
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman }); // Object { isSuperman: false }
})();
