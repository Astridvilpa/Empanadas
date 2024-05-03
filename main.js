// Función 
export const fn = (empanadaPollo, empanadaCarne, empanadaVegetariana) => {


  // condiciones
  if (
    empanadaPollo + empanadaCarne + empanadaVegetariana < 40 &&
    empanadaPollo + empanadaCarne + empanadaVegetariana >= 3 &&
    empanadaPollo >= 0 &&
    empanadaCarne >= 0 &&
    empanadaVegetariana >= 0 &&
    (empanadaPollo + empanadaCarne + empanadaVegetariana) % 3 === 0
  ) {
   
    // costo de cada tipo de empanada y aplicando la oferta especial
    const precioPollo = empanadaPollo * 12;
    const precioCarne = empanadaCarne * 14;
    const precioVegetariana = empanadaVegetariana * 16;
    const total = (precioPollo + precioCarne + precioVegetariana) / 3;

    // Redondeo  precio total
    return Math.ceil(total);
  } else {
    throw Error;
  }
};  
