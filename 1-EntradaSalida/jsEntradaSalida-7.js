/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;//Lo primero que se hace es definir las variables arriba, asignandole nombres acorde a la necesidad
	var segundoNumero;
	var resultadoSuma;//Se define una variable resultado tambien que implique una operacion aritmetica entre ambos numeros.

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);


	resultadoSuma=primerNumero+segundoNumero;
	console.log(resultadoSuma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoResta;

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	resultadoResta=primerNumero - segundoNumero;
	console.log(resultadoResta);
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

