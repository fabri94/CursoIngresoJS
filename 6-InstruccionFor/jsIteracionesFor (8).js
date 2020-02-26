function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera;

	bandera=0
	numeroIngresado=prompt("Ingrese el numero ");
	numeroIngresado=parseInt(numeroIngresado);


	for(i=2;i<numeroIngresado;i++)
	{
		console.log(i);
		if(numeroIngresado%i==0) //esto quiere decir que el numeroIngresado es divisible por el i. Si encontre un divisor quiere decir que ya no es primo.
		{
			bandera=1;
			//break;
		} 
	}

	if(bandera==0)
	{
		alert("Es primo el numero: " +numeroIngresado);
	}
}//FIN DE LA FUNCIÓN