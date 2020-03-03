/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/


function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;

	respuesta="si"; //inicializacion de la variable. luego sigue pedir los datos y validarlos.

	do
	{
		nombre=prompt("Ingrese nombre.");

		do
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas)||cantidadDePersonas<1); // se le cambia la logica abajo para que pase mas de una vez.

		console.log("personas: "+cantidadDePersonas);

		do
		{
			cantidadDeDias=prompt("Ingrese cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias)||cantidadDeDias<1);
		
		console.log("dias: "+cantidadDeDias);

		do
		{
			formaDePago=prompt("Ingrese forma de pago.");
		}while(!isNaN(formaDePago)||formaDePago!="QR"&&formaDePago!="tarjeta"&&formaDePago="efectivo");

		console.log("forma de pago: "+formaDePago);





		respuesta=prompt("¿Desea continuar?");
	}while(respuesta=="si");
}
