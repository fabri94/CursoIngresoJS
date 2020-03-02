function mostrar()
{
	var i;
	var numero;
	numero=prompt("Ingrese el numero 9");
	numero=parseInt(numero);

	for(i=0;numero!=9;i++)
	{
		console.log("Error");
		numero=prompt("El numero ingresado no es el correcto por favor vuelva a ingresarlo");
		if(numero==9)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN