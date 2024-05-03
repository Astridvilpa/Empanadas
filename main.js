// Función para calcular el precio total de las empanadas
export const fn = (empanadaPollo, empanadaCarne, empanadaVegetariana) => {

   // Comprobación de las condiciones
   if (
      empanadaPollo + empanadaCarne + empanadaVegetariana < 40 &&
      empanadaPollo + empanadaCarne + empanadaVegetariana >= 3 &&
      empanadaPollo >= 0 && empanadaCarne >= 0 && empanadaVegetariana >= 0 &&
      (empanadaPollo + empanadaCarne + empanadaVegetariana) % 3 === 0
  ) 


  
};