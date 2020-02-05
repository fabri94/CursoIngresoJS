/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	resultado=sueldo+(sueldo*10/100)
	resultado=parseInt(resultado);

	document.getElementById('resultado').value=resultado;

	console.log(resultado);

}

