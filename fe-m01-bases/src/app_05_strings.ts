(()=>{
  const batman: string = 'Batman';
  const linternaVerde: string = "Lintarna's Verde"; // Apostrofe '
  const linternaGreen: string = 'Linternta\'s Verde'; // Escapamos apostrofe

  console.log(batman[2]); // t

  console.log(batman[20]?.toUpperCase()); // undefined

  // si es indefinido muestra or
  console.log(batman[20]?.toUpperCase() || 'No está'); // No está

})()