(()=>{
  let nada: undefined = undefined; // undefined

  // El tipo 'undefined' no se puede asignar al tipo 'number'.
  // let numero: number = undefined;

  console.log(nada);

  // Especificamos para que acepte
  let isActive: (boolean|undefined) = undefined;


  // null no es lo mismo que undefined
})()