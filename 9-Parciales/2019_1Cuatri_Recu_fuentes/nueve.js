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
	var respuesta;

	var contadorVaronesAprobados;

	var contadorNotasMenores;
	var acumuladorNotasMenores;
	var promedioNotasMenores;

	var contadorNotasAdolescentes;
	var acumuladorNotasAdolescentes;
	var promedioNotasAdolescentes;

	var contadorNotasMayores;
	var acumuladorNotasMayores;
	var promedioNotasMayores;

	var contadorNotasVarones;
	var acumuladorNotasVarones;
	var promedioNotasVarones;

	var contadorNotasMujeres;
	var acumuladorNotasMujeres;
	var promedioNotasMujeres;

	contadorVaronesAprobados=0;
	
	contadorNotasMenores=0;
	acumuladorNotasMenores=0;

	contadorNotasAdolescentes=0;
	acumuladorNotasAdolescentes=0;

	contadorNotasMayores=0;	
	acumuladorNotasMayores=0;

	contadorNotasMujeres=0;
	acumuladorNotasMujeres=0;

	contadorNotasVarones=0;
	acumuladorNotasVarones=0;

	do
	{
		do
		{	
			nombre=prompt("Ingrese nombre.");
		}while(!isNaN(nombre));

		console.log("Nombre: "+nombre);

		do
		{
			edad=prompt("Ingrese edad.");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<6 || edad>100);

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
		}while(isNaN(notaFinal) || notaFinal<0 || notaFinal>10);

		console.log("Nota final: "+notaFinal);

		if(sexo=="m" && notaFinal>5)
		{
			contadorVaronesAprobados++;
		}

		if(edad>17)
		{
			contadorNotasMayores++;
			acumuladorNotasMayores=acumuladorNotasMayores+notaFinal;
		}else
		{
			if(edad>12)
			{
				contadorNotasAdolescentes++;
				acumuladorNotasAdolescentes=acumuladorNotasAdolescentes+notaFinal;
			}else
			{
				contadorNotasMenores++;
				acumuladorNotasMenores=acumuladorNotasMenores+notaFinal;
			}
		}
		if(sexo=="f")
		{
			contadorNotasMujeres++;
			acumuladorNotasMujeres=acumuladorNotasMujeres+notaFinal;
		}else
		{
			contadorNotasVarones++;
			acumuladorNotasVarones=acumuladorNotasVarones+notaFinal;
		}


		respuesta=prompt("¿Desea seguir ingresando datos?");

	}while(respuesta =="si");

	promedioNotasMenores=acumuladorNotasMenores/contadorNotasMenores;
	promedioNotasAdolescentes=acumuladorNotasAdolescentes/contadorNotasAdolescentes;
	promedioNotasMayores=acumuladorNotasMayores/contadorNotasMayores;
	promedioNotasMujeres=acumuladorNotasMujeres/contadorNotasMujeres;
	promedioNotasVarones=acumuladorNotasVarones/contadorNotasVarones;

	document.write("<br>La cantidad de varones aprobados es: "+contadorVaronesAprobados);
	document.write("<br>Promedio de notas de menores: "+promedioNotasMenores);
	document.write("<br>Promedio de notas de adolescentes: "+promedioNotasAdolescentes);
	document.write("<br>Promedio de notas de mayores: "+promedioNotasMayores);
	document.write("<br>Promedio de notas de mujeres: "+promedioNotasMujeres);
	document.write("<br>Promedio de notas de varones: "+promedioNotasVarones);

}

