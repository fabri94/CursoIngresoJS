function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese el numero por favor.");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
			positivo=parseInt(positivo);
		}
		else
		{	
			negativo=negativo*numeroIngresado;
			negativo=parseInt(negativo);
		}
		respuesta=prompt("¿Desea seguir agregando numeros?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN