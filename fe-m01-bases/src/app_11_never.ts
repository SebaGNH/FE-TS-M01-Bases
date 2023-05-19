(()=>{// never no es void ni undefined

  //Never es una función que va a terminar con un error
  //never es un código que nunca será exitoso
  const miError = ( message: string): never => { // valor de retorno es never
    throw new Error(message);
  }

  miError('Auxilio');



  // o no devuelve nada mediante un error o un número
  const miNever = ( message: string): (never|number) => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  }

  miNever('Auxilio');

})()