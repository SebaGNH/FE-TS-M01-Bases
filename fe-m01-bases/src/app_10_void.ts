(()=>{
  function callBatman(): void { // Como la función no devuelve nada se pone void
    //Sin return devuelve undefined
    // return 1; // Si agrego el return se va a quejar
  }

  const limpio = callBatman();// No devuelve nada, es void al poner ver "limpio"
  console.log(limpio)

  const callSuperman = ():void => {
    // return true; // Se queja al agregar return true
  }


})()