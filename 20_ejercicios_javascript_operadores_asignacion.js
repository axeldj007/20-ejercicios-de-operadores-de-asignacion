
//Ejercicio 1
let consumo = 50;
let ciclos = 1;
let carga = 100;
--carga;
 let autonomiaEstimada = (carga*100)/consumo;
autonomiaEstimada *= (100 - ciclos)* 0.01;
console.log("la autonomia estimada es: " + autonomiaEstimada);

//Ejercicio 2
let precioProducto = 2000;
let descuentoEnPorcentaje = 15;
let impuestoEnPorcentaje = 16;
impuestoEnPorcentaje++
precioProducto += ((precioProducto*impuestoEnPorcentaje)/100);
precioProducto -= ((precioProducto*descuentoEnPorcentaje)/100);
console.log(precioProducto);

 //Ejercicio 3 
let tarifaBase = 30;
 let tarifaPorMinuto = 5;
  let tarifaPorKm = 10;
   let minutos = 15;
  let kilometros = 1;
let costoTotalViaje = tarifaBase+(tarifaPorMinuto*minutos)+(tarifaPorKm*kilometros);
console.log(
    "el costo del viaje es: " + costoTotalViaje
);

//Ejercicio 3 otra solucion 
let tarifaBase1 = 30;
 let tarifaPorMinuto1 = 5;
  let tarifaPorKm1 = 10;
   let minutos1 = 15; 
  let kilometros1 = 1;
let costoTotalViaje1 = tarifaBase; 
 costoTotalViaje1 += tarifaPorMinuto1*minutos1;
  costoTotalViaje1 += tarifaPorKm1*kilometros;
console.log(
    "el costo total del viaje es: " + costoTotalViaje1
);

//Ejercicio 4 
let precioBase = 115;
 let recargoPorDiaAtrasado = 3;
  let cantidadDeDiasDeRetraso = 5;
   ++cantidadDeDiasDeRetraso;
  let precioFinal = precioBase;
 precioFinal += cantidadDeDiasDeRetraso*recargoPorDiaAtrasado;
console.log(
  "el total a pagar es: "+ precioFinal
);

//Ejercicio 5 
let yearsExtendedWarranty= 2;
  let priceYearOfUse = 250;
   let yearsUse = 2;
    ++yearsUse
  let finalCost = priceYearOfUse*yearsExtendedWarranty;
 finalCost *= 1 + (yearsUse *0.1);
console.log(
  "el costo final es :" + finalCost
);

//Ejercicio 6 
 let capacidadBateria = 100;
 let consumodiario = 100;
 let ciclosCarga = 1
 ++ciclosCarga;
let saludDeLaBateria = capacidadBateria;
 let calculo1 = ciclosCarga*consumodiario/1000;
saludDeLaBateria -= calculo1; 
console.log(
  "la salud de la bateria es de : " + saludDeLaBateria + "%"
); 

//Ejercicio 6 otra solucion
let capacidadBateria1 = 100;
let consumoDiario = 5;
let ciclosCarga1 = 2;
++ciclosCarga;
let degradacionPorCiclos = ciclosCarga * 0.1;
let reduccionPorConsumo = consumoDiario;
let saludDeLaBateria1 = capacidadBateria;
saludDeLaBateria -= degradacionPorCiclos;
saludDeLaBateria -= reduccionPorConsumo;
console.log("La salud de la batería es de: " + saludDeLaBateria + "%");

//Ejercicio 7
let unidades = 1200;
let lote = 400;
let precioUnidad = 1200;
let inventario1 = unidades+lote;
console.log("hay" +(unidades*precioUnidad)+ " unidades en el inventario");
let venta = 0;
++venta;
++venta;
++venta;
inventario1 -= venta;
 let dineroEninventario = lote*precioUnidad;
 dineroEninventario -= precioUnidad*venta;
 let dineroEnLote = lote*precioUnidad;
 let dineroEnVenta = precioUnidad*venta;

console.log(
  "llegaron " + lote + " iphones, lo que equivale a $" + dineroEnLote +"." 
  + " se vendieron: " + venta + " iphones lo que equivale a: $" + dineroEnVenta+"."
  + "quedaron en almacen: " + inventario1 + " iphones lo que equivale a: $" + dineroEninventario+"."
);

//Ejercicio 7 
let unidades2 = 1200;       
let lote2 = 400;            
let precioUnidad2 = 1200;   
let venta2 = 0;
unidades--; venta++;   
unidades--; venta++;   
unidades--; venta++;   
unidades += lote;  
let dineroEnInventario = unidades * precioUnidad;
let dineroEnLote2 = lote * precioUnidad;
let dineroEnVenta2 = venta * precioUnidad;
console.log(
  "Llegaron " + lote + " iPhones, lo que equivale a $" + dineroEnLote + ". " +
  "Se vendieron " + venta + " iPhones, lo que equivale a $" + dineroEnVenta + ". " +
  "Quedaron en almacén: " + unidades + " iPhones, lo que equivale a $" + dineroEnInventario + "."
);

//Ejercicio 8 contador de visitas
let  visitas = 0; 
 visitas++;
  visitas++;
   ++visitas;
   console.log(
    'hoy hubo ' + visitas + " visitas"
  );

// Ejercicio 9 reunion
let duracionReunion = 10;
duracionReunion--
duracionReunion--
let retrasoPorPersona = 2;
duracionReunion -= retrasoPorPersona;
console.log('tiempo restante: ' + duracionReunion);

//Ejercicio 10 producto
let articulo = 1000;
let aumento = 5;
articulo *= 1 + (aumento / 100);
console.log(articulo);

//Ejercicio 11 almacen
let productoEnAlmacen = 50;
let llegadaDeProductos = 30;
let ventaDeProductos = 12;
productoEnAlmacen += llegadaDeProductos;
productoEnAlmacen -= ventaDeProductos;
console.log('productos en stock: ' + productoEnAlmacen);

//Ejercicio 12 acumulador de puntos
let puntos =0; 
let puntosGanados = 30; 
let bonusX2 = 2; 
puntos += puntosGanados; 
console.log(puntos); 
puntosGanados *= bonusX2; 
console.log('puntos ganados: ' + puntosGanados);

//Ejercicio 13
let dineroEnCaja = 1000;
let ventaEnDinero = 250;
++ventaEnDinero;
let dineroTotalEnCaja = 0;
dineroTotalEnCaja += dineroEnCaja;
dineroTotalEnCaja += ventaEnDinero;
console.log('el dinero total es: $' + dineroTotalEnCaja);

//Ejercicio 14
let presupuestoOficina = 5000;
let gastoOficina = 1200;
--gastoOficina;
presupuestoOficina -= gastoOficina;
console.log('el restante del presupuesto es: ' + presupuestoOficina);

//Ejercicio 15
let piezasProducidas = 200;
let produccionDuplicada = 2;
let totalDePiezas = 0;
 ++totalDePiezas;
  totalDePiezas += (piezasProducidas * produccionDuplicada);
console.log('el total de piezas producidas es: ' + totalDePiezas);

//Ejercicio 16
let botellasProducidas = 350;
let produccionExtra = 3;
let totalBotellas = 0;
totalBotellas ++;
totalBotellas += botellasProducidas*produccionExtra;
console.log("El total de botellas producidas es: " + totalBotellas);