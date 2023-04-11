(()=>{ //Función global auto invocada, es para crear varios archivos en el mismo proyecto y que no caigan en el scope global y que typescript marque errores

if (false) { // Tipos de datos

  const num1: number = 10;
  console.log(typeof num1); // number

  let cadena2: string = "Canelo";
  console.log(typeof cadena2); // number

  let isOpen: boolean = true;
  console.log(typeof isOpen); // boolean
}

if (false) { // Declaración de funciones

  function sayHello( mensaje:string ) {
    console.log( mensaje );
     // mensaje. <-- con el punto podemos agregar la ayuda con los métodos y propiedades de los string
  }
  sayHello('Hola');
}

















})()

















