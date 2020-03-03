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

	var maximoDePersonas;
	var maximoDePersonasNombre; //si no tengo ningun contador tengo que poner una flag para demostrar que es la primera vez.
	
	var contador;
	var acumulador; //necesito al acumulador y contador para poder sacar el promedio.
	var promedio;
	
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;

	respuesta="si"; //inicializacion de la variable. luego sigue pedir los datos y validarlos.
	contador=0;
	acumulador=0;
	contadorTarjeta=0;
	contadorQR=0;
	contadorEfectivo=0;

	do
	{
		
		do
		{
			nombre=prompt("Ingrese nombre.");
		}while(isNaN(nombre));

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
		}while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="tarjeta" && formaDePago!="efectivo");

		console.log("forma de pago: "+formaDePago);

		if(contador==0 || maximoDePersonas<cantidadDePersonas)//es la primera vez o que sea mayor al maximo.
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}

		if(contador==0 || maximoDeDias<cantidadDeDias)//es la primera vez o que sea mayor al maximo.
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}

		switch(formaDePago)
		{
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++;
				break;		
		}
		acumulador=acumulador+cantidadDeDias;
		contador++;
		respuesta=prompt("¿Desea continuar?");
	}while(respuesta=="si"); //termina el while.

	if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
	{
		formaDePagoMasUtilizada="efectivo";
	}else
	{
		if(contadorQR>contadorTarjeta)
		{
			formaDePagoMasUtilizada="qr";
		}else
		{
			formaDePagoMasUtilizada="tarjeta";
		}
	}


	promedio=acumulador/contador;
	console.log("Nombre del huesped que trajo mas reservas: "+maximoDePersonasNombre);
	console.log("La cantidad de personas que se quedaron mas dias: "+maximoDeDiasCantidadDePersonas)//asi verificamos que esta bien.
	console.log("La forma de pago mas utilizada :"+formaDePagoMasUtilizada);

	document.write("<br> Nombre del huespes que trajo mas reservas: "+maximoDePersonasNombre);
	document.write("<br> La cantidad de de personas que se quedaron mas dias: "+maximoDeDiasCantidadDePersonas);
	document.write("<br> La forma de pago mas utilizada: "+formaDePagoMasUtilizada);
	document.write("<br> Promedio: "+promedio);
}

