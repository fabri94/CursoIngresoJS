function mostrar()
{
	var i;
	var parar;
	parar=prompt("¿Cuando desea parar?");
	parar=parseInt(parar);

	for(i=0;;i++)
	{
		console.log("Numero: " +i)
			if(i==parar-1)
			{
				break;
			}
	}
}//FIN DE LA FUNCIÓN