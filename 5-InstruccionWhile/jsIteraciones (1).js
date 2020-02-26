function mostrar()
{
	var contador;
	contador=0
	while(contador<10)
	{
		contador=contador+1
		console.log("Número: " +contador);
	}
}


/*
	var contador;
	var contadorPares;
	var acumulador;
	var maximo;
	var minimo;
	var numeroIngresado;
	var sexo;
	var nombre;
	var bandera;
	var maximoSexo;
	var maximoNombre;

	SE CREAN VARIABLES AUXILIARES POR CADA CAMBIO QUE PIDA EL EJERCICIO. EJEMPLO "var maximoNombre; var maximoSexo;" 	

	
	//INICIALIZACIONES//
	contador=0;
	contadorPares=0;
	acumulador=0;
	bandera="no es valor"; (lo importante de la bandera no es el valor que tiene sino que le cambia el valor). o ponerle sino "bandera=0;"


	1)El contador y acumulador siempre se inicializan (valor de origen 0)
	2)El while tiene que tener la cantidad de vueltas que quiero dar, ejemplo 

	
	while(contador<10)
	{
		contador=contador+1; (de 0 al 9) ó si esta abajo da del 1 al 10.
		numeroIngresado=prompt("ingrese el "+contador+" numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado|| numeroIngresado <0 || numeroIngresado>10)) isNaN= hace referencia a si no es un numero. entonces la logica del ejercicio es que es si no es un numero, es menor a 0 o mayor a 10, el cartel que mostrara sera de "error".
		{
			numeroIngresado=prompt("Error, ingrese el "+contador+" numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
	}

	
	sexo=prompt("Ingrese el "+contador+" numero");
	while(!isNan(sexo)|| sexo!="f" && sexo!="m")    se van agregando con && porque tiene quee ser distintos a todos para dar el error.
	{
		sexo=prompt("Error, ingrese el "+contador+" numero");
	}


	acumulador=acumulador+numeroIngresado;

	if(numeroIngresado%2==0)
	{
		contadorPares=contadorPares+1;
	}


	if(bandera==0)      en este caso la bandera es innecesaria ya que tengo el contador...
	{
		bandera=1;
		maximo=numeroIngresado;
		minimo=numeroIngresado;
	}else
	{
		if(maximo<numeroIngresado)
		{
			maximo=numeroIngresado;	
		}
		if(minimo>numeroIngresado)
		{
			minimo=numeroIngresado;
		}
	}



	if(contador==0)     Sino puede hacerse asi...
	{
		bandera=1;
		maximo=numeroIngresado;
		minimo=numeroIngresado;
	}else
	{
		if(maximo<numeroIngresado)
		{
			maximo=numeroIngresado;	
		}
		if(minimo>numeroIngresado)
		{
			minimo=numeroIngresado;
		}
	}



	if(maximo<numeroIngresado || contador==1)   Tambien se puede escribir asi.........
	{
		maximo=numeroIngresado;
		maximoSexo=sexo;
		maximoNombre=nombre;
	}
	if(contador==1 || minimo>numeroIngresado)
	{
		minimo=numeroIngresado;
	}

	/*do
	{
		console.log(contador); /*si pongo el console.log aca arriba me va a mostrar del 0 al 9*/
		contador++;//contador=contador+1;
		console.log(contador);//1 al 10
	}while(contador>10); //El do-while siempre termina en ; de forma de que no se siga ejecutando. La diferencia entre el while y el do while, es que este ultimo se ejecuta minimamente una vez.*/
}	


