(()=>{

  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatiSignal = (): string => {
    return 'Batiseñal Activada!';
  }

  console.log(typeof activateBatiSignal); // function



  const heroName = returnName();

  console.log(heroName); // Flash


})()