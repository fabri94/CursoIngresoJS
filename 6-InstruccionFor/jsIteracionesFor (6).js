function mostrar()
{

	var i;
	var numeroIngresado;
	var contadorPares;

	contadorPares=0;
	
	do
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
	}while(isNaN(numero)||numero<1);


	for(i=2;i<numeroIngresado;i=i+2)
	{
		console.log("Número par: " +i);
		contadorPares=contadorPares+1;
	}

 	console.log("Cantidad de numeros pares: "+contadorPares);
}//FIN DE LA FUNCIÓN