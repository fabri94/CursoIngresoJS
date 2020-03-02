function mostrar()
{
	var i;
	var numero;
	var contadorDivisores;

	contadorDivisores=0;

	do
	{	
		numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);
	}while(isNaN(numero)||numero<1);

	for(i=0;i<numero;i++)
	{
		if((numero%i)==0)
		{
			console.log(i+" es divisor.");
			contadorDivisores++;
		}
	}

	console.log("Numero de divisores: "+contadorDivisores);
}//FIN DE LA FUNCIÓN