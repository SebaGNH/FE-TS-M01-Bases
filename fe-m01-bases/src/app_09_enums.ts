(()=>{ //Se define con UpperCase

  //Se usa para que se respeten las opciones

  enum AudioLevel {
  min = 1,
  medium,
  medium2,
  max = 10
  }

  // Al poner el punto nos da las opciones "min, medium, max"
  const currentAudio = AudioLevel.medium;

  console.log(currentAudio); // 2 <--Nos da valores como un arreglo

  console.log(AudioLevel); // Object { 1: "min", 2: "medium", 10: "max", min: 1, medium: 2, max: 10 }

  let audioActual: AudioLevel = AudioLevel.max; // contiene al 10
  console.log(audioActual); // 10


})()