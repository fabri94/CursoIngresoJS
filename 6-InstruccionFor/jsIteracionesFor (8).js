function mostrar()
{
	var i;
	var numero;
	var flag;

	flag=0;

	do
	{
		numero=prompt("Ingrese un numero por favor.");
		numero=parseInt(numero);
	}while(isNaN(numero));

	for(i=2;i<numero;i++)
	{
		console.log(i);
		if(numero%i==0)
		{
			flag=1;
			break;
		}
	}		
	if(flag==0)
	{
		alert("El número "+numero+ " es primo.");
	}
}//FIN DE LA FUNCIÓN