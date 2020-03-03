/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
 	var numeroPositivo;
 	var i;
 	var contadorPares;

 	contadorPares=0;

	numeroPositivo=document.getElementById('numero').value;
 	numeroPositivo=parseInt(numeroPositivo);

 	for(i=0;i<numeroPositivo;i=i+2)
 	{
 		contadorPares++;
 	}
 	
 	console.log("La cantidad de numeros pares es: "+contadorPares);
 	alert("La cantidad de números pares es: "+contadorPares);
}	

function NumerosImpares ()
{
	var numeroPositivo;
	var i;
	var contadorImpares;

	contadorImpares=0;

	numeroPositivo=document.getElementById('numero').value;
	numeroPositivo=parseInt(numeroPositivo);

	for(i=1;i<numeroPositivo;i=i+2)
	{
		contadorImpares++;
	}

	console.log("La cantidad de numeros impares es: "+contadorImpares);
	alert("La cantidad de numeros impares es: "+contadorImpares);
}

function NumerosDivisibles ()
{
	var numeroPositivo;
	var i;
	var contadorDivisores;

	contadorDivisores=0;

	numeroPositivo=document.getElementById('numero').value;
	numeroPositivo=parseInt(numeroPositivo);

	for(i=1;i<100;i++)
	{
		if(numeroPositivo%i==0)
		{
			contadorDivisores++;
		}
	}

	console.log("La cantidad de divisores es: "+contadorDivisores);
	alert("La cantidad de divisores es: "+contadorDivisores);
}

function VerificarPrimo ()
{
	var numeroPositivo;
	var i;
	var flag;

	flag=0;

	numeroPositivo=document.getElementById('numero').value;
	numeroPositivo=parseInt(numeroPositivo);

	for(i=2;i<numeroPositivo;i++)
	{
		if(numeroPositivo%i==0)
		{
			flag=1
			break;
		}
	}

	if(flag==0)
	{
		console.log("El numero ingresado "+numeroPositivo+" es primo.");
		alert("El numero ingresado "+numeroPositivo+" es primo.");
	}

function NumerosPrimos()
{
	var numeroPositivo;
	var divisor;
	var bandera;
	var contadorPrimos;

	bandera=0;
	contadorPrimos=0;

	numeroPositivo=document.getElementById('numero').value;
	numeroPositivo=parseInt(numeroPositivo);

	for(numeroPositivo;numeroPositivo>1;numeroPositivo--)
	{
		for(divisor=2;divisor<numeroPositivo;divisor++)
		{
			if(numeroPositivo%divisor==0)
			{
				bandera=1; 
				break;
			}
			else
			{
				bandera=0; //Hay que reiniciar la bandera, de lo contrario queda en uno y el programa no opera correctamente (detecta un solo numero primo).
			}
		}
		if(bandera==0)
		{
			console.log("El número "+numeroPositivo+" SI es primo");
			contadorPrimos++;
		}
	}
	alert("La cantidad de numeros primos es: "+contadorPrimos);
	console.log("La cantidad de numeros primos es: "+contadorPrimos);
}
}	