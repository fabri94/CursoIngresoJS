/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/


function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var notaFinal;
	var contadorAprobados;
	var contadorVaronesAprobados;
	var contadorMujeresAprobadas;
	var contadorNotasMenores;
	var contadorNotasAdolescentes;
	var contadorNotasMayores;

	contadorAprobados=0;
	contadorVaronesAprobados=0;
	contadorMujeresAprobadas=0;
	contadorNotasMenores=0;
	contadorNotasAdolescentes=0;	
	contadorNotasMayores=0;

	var respuesta;

	do
	{
		do
		{	
			nombre=prompt("Ingrese nombre.");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("Ingrese edad.");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<0 || edad>100);

		console.log("Edad: "+edad);

		do
		{
			sexo=prompt("Ingrese su sexo.");
		}while(sexo!="f" && sexo!="m");

		console.log("Sexo: "+sexo);

		do
		{
			notaFinal=prompt("Ingrese la nota del final.");
			notaFinal=parseInt(notaFinal);
		}while(isNaN(notaFinal) || notaFinal<=0);

		console.log("Nota final: "+notaFinal);

		if(sexo=="m" && notaFinal>=6)
		{
			contadorVaronesAprobados++;
		}

		if(edad>17 && notaFinal>=6)
		{

		}





		respuesta=prompt("¿Desea seguir ingresando datos?");

	}while(respuesta =="si");


}

