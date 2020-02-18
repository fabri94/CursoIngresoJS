function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	if(numeroUno=numeroDos)
	{
		resultado=numeroUno+numeroDos;
		console.log("El resultado es " +resultado+);
	}else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno - numeroDos;
		}else
		{

		}
	}
}
