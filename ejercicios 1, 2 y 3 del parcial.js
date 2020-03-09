/*Ejercicios 1, 2 y 3 del parcial.*/

function mostrar()
{
	var ingresado;
	var producto;
	var precioProducto;
	var cantidadDeUnidades;
	var fabricante;

	var precioBarbijoMasCaro;
	var cantidadDeUnidadesDeBarbijoMasCaro;
	var fabricanteDeBarbijoMasCaro;
	var contador;

	var fabricanteMasUnidades;
	var ordenMasUnidades;
	var contadorOrdenMasUnidades;

	var cantidadDeJabones;
	var acumuladorJabones;

	contador=0;
	contadorOrdenMasUnidades=0;
	acumuladorJabones=0;
	ingresado=0;

	do
	{
		do
		{
			producto=prompt("Ingrese el producto.");
		}while(!isNaN(producto)||producto!="jabon" && producto!="barbijo" && producto!="alcohol");
		console.log("El producto ingresado es: "+producto);

		do
		{
			precioProducto=prompt("Ingrese el precio del producto.");
			precioProducto=parseInt(precioProducto);
		}while(isNaN(precioProducto)||precioProducto<100||precioProducto>300);
		console.log("El precio ingresado es: "+precioProducto);

		do
		{
			cantidadDeUnidades=prompt("Ingrese cantidad de unidades.");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}while(isNaN(cantidadDeUnidades)||cantidadDeUnidades<1||cantidadDeUnidades>1000);
		console.log("La cantidad de unidades de "+producto+" son: "+cantidadDeUnidades);

		do
		{
			fabricante=prompt("Ingrese el fabricante del producto");
		}while(!isNaN(fabricante));
		console.log("El fabricante del "+producto+" es: "+fabricante);


		if(producto=="barbijo" && (contador==0 || precioBarbijoMasCaro<precioProducto))
		{
			contador++;
			precioBarbijoMasCaro=precioProducto;
			cantidadDeUnidadesDeBarbijoMasCaro=cantidadDeUnidades;
			fabricanteDeBarbijoMasCaro=fabricante;
		}

		if(contadorOrdenMasUnidades==0||ordenMasUnidades<cantidadDeUnidades)
		{
			contadorOrdenMasUnidades++;
			ordenMasUnidades=cantidadDeUnidades;
			fabricanteMasUnidades=fabricante;
		}

		if(producto=="jabon")
		{	
			cantidadDeJabones=cantidadDeUnidades;
			acumuladorJabones=acumuladorJabones+cantidadDeJabones;
		}

		ingresado++;
		console.log("La cantidad de productos ingresados es: "+ingresado);
	}while(ingresado<5);


	console.log("Cantidad de unidades de barbijos mas caros: "+cantidadDeUnidadesDeBarbijoMasCaro+" y su fabricante es: "+fabricanteDeBarbijoMasCaro);
	console.log("Fabricante del item con mas unidades: "+fabricanteMasUnidades);
	console.log("Cantidad total de jabones: "+acumuladorJabones);

	document.write("<br>Cantidad de unidades de barbijos mas caros: "+cantidadDeUnidadesDeBarbijoMasCaro+" y su fabricante es: "+fabricanteDeBarbijoMasCaro);
	document.write("<br>Fabricante del item con mas unidades: "+fabricanteMasUnidades);
	document.write("<br>Cantidad total de jabones: "+acumuladorJabones);	
}


function mostrar()
{
	var peso;
	var precioPorKilo;
	var tipoAlimento;
	var respuesta;
	
	var importeBruto;
	var descuento;
	var importeConDescuento;

	var precioAlimentoMasCaro;
	var alimentoMasCaro;
	var contadorAlimentoMasCaro;

	var contadorPrecioPorKilo;
	var acumuladorPrecioPorKilo;
	var promedioPrecioPorKilo;

	respuesta="si";
	descuento=0;
	contadorAlimentoMasCaro=0;

	contadorPrecioPorKilo=0;
	acumuladorPrecioPorKilo=0;

	do
	{
		do
		{
			tipoAlimento=prompt("Ingrese el tipo de alimento");
		}while(!isNaN(tipoAlimento)||tipoAlimento!="v" && tipoAlimento!="a" && tipoAlimento!="m");
		console.log("Alimento ingresado: "+tipoAlimento);

		do
		{
			precioPorKilo=prompt("Ingrese el precio por kilo.");
			precioPorKilo=parseInt(precioPorKilo);
		}while(isNaN(precioPorKilo)||precioPorKilo<1);
		console.log("Precio por kilo: "+precioPorKilo);

		do
		{
			peso=prompt("Ingrese el peso de la compra");
			peso=parseInt(peso);
		}while(isNaN(peso)||peso<10||peso>1000);
		console.log("Peso ingresado: "+peso);

		if(peso<100)
		{
			descuento=0;
		}else
		{
			if(peso<300)
			{
				descuento=15;
			}else
			{
				descuento=25;
			}
		}

		if(contadorAlimentoMasCaro==0 || precioAlimentoMasCaro<precioPorKilo)
		{
			precioAlimentoMasCaro=precioPorKilo;
			alimentoMasCaro=tipoAlimento;
			contadorAlimentoMasCaro++;
		}

		contadorPrecioPorKilo++;
		acumuladorPrecioPorKilo=acumuladorPrecioPorKilo+precioPorKilo;
		respuesta=prompt("¿Desea seguir ingresando alimentos?");

	}while(respuesta=="si");

	importeBruto=precioPorKilo*peso;
	importeConDescuento=importeBruto-(importeBruto)*(descuento/100);
	promedioPrecioPorKilo=acumuladorPrecioPorKilo/contadorPrecioPorKilo;

	console.log("El importe bruto por la compra sera: "+importeBruto);
	console.log("El importe con descuento por la compra sera: "+importeConDescuento);
	console.log("Tipo de alimento mas caro: "+alimentoMasCaro);
	console.log("Promedio de precio por kilo: "+promedioPrecioPorKilo);

	document.write("<br>El importe bruto por la compra sera: "+importeBruto);
	document.write("<br>El importe con descuento por la compra sera: "+importeConDescuento);
	document.write("<br>Tipo de alimento mas caro: "+alimentoMasCaro);
	document.write("<br>Promedio de precio por kilo: "+promedioPrecioPorKilo);			
}

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta;
	var contador;

	var contadorHombreCasadoMasJoven;
	var edadHombreMasJovenCasado;
	var nombreHombreMasJovenCasado;

	var sexoPasajerxMasViejx;
	var edadPasajerxMasViejx;

	var contadorMujeresViudas;
	var acumuladorMujeresViudas;

	var contadorMujeresCasadas;
	var acumuladorMujeresCasadas;

	var promedioEdadMujeres;
	var contadorEdadMujeres;
	var acumuladorEdadMujeres;

	var promedioEdadHombresSolteros;
	var contadorEdadHombresSolteros;
	var acumuladorEdadHombresSolteros;

	respuesta="si";
	contador=0;

	contadorHombreCasadoMasJoven=0;

	contadorMujeresViudas=0;
	acumuladorMujeresViudas=0;
	contadorMujeresCasadas=0;
	acumuladorMujeresCasadas=0;

	contadorEdadMujeres=0;
	acumuladorEdadMujeres=0;

	contadorEdadHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;

	do
	{
		do
		{
			nombre=prompt("Ingrese el nombre del pasajerx");
		}while(!isNaN(nombre));
		console.log("Nombre del pasajerx: "+nombre);

		do
		{
			edad=prompt("Ingrese la edad del pasajerx");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad<18);
		console.log("Edad del pasajerx: "+edad);
		
		do
		{
			sexo=prompt("Ingrese el sexo del pasajerx");
		}while(!isNaN(sexo)||sexo!="f" && sexo!="m");
		console.log("Sexo del pasajerx: "+sexo);

		do
		{
			estadoCivil=prompt("Ingrese el estado civil del pasajerx");
		}while(!isNaN(estadoCivil)||estadoCivil!="solterx" && estadoCivil!="casadx" && estadoCivil!="viudx");
		console.log("Estado civil del pasajerx: "+estadoCivil);

		if(sexo=="m" && estadoCivil=="casadx" && (contadorHombreCasadoMasJoven==0 || edadHombreMasJovenCasado>edad))
		{
			edadHombreMasJovenCasado=edad;
			nombreHombreMasJovenCasado=nombre;
			contadorHombreCasadoMasJoven++;
		}
		if(contador==0 || edadPasajerxMasViejx<edad)
		{
			edadPasajerxMasViejx=edad;
			sexoPasajerxMasViejx=sexo;
		}
		if(sexo=="f")
		{
			if(estadoCivil=="casadx")
			{
				contadorMujeresCasadas++;
			}else
			{
				if(estadoCivil=="viudx")
				{
					contadorMujeresViudas++;
				}	
			}
		}
		if(sexo=="m" && estadoCivil=="solterx")
		{
			contadorEdadHombresSolteros++;
			acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edad;
		}else
		{
			if(sexo=="f")
			{
				contadorEdadMujeres++;
				acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
			}
		}

		contador++;
		respuesta=prompt("¿Desea seguir agregando pasajerxs?");
	}while(respuesta=="si");

	promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorEdadHombresSolteros;
	promedioEdadMujeres=acumuladorEdadMujeres/contadorEdadMujeres;

	console.log("Nombre del hombre mas joven casado: "+nombreHombreMasJovenCasado);
	console.log("Pasajerx mas viejx de edad: "+edadPasajerxMasViejx+" es de sexo: "+sexoPasajerxMasViejx);
	console.log("Cantidad de mujeres viudas: "+contadorMujeresViudas+" y cantidad de mujeres casadas: "+contadorMujeresCasadas);
	console.log("Promedio edad hombres solteros: "+promedioEdadHombresSolteros+" y de mujeres: "+promedioEdadMujeres);

	document.write("<br>Nombre del hombre mas joven casado: "+nombreHombreMasJovenCasado);
	document.write("<brPasajerx mas viejx de edad: "+edadPasajerxMasViejx+" es de sexo: "+sexoPasajerxMasViejx);	
	document.write("<br>Cantidad de mujeres viudas: "+contadorMujeresViudas+" y cantidad de mujeres casadas: "+contadorMujeresCasadas);	
	document.write("<br>Promedio edad hombres solteros: "+promedioEdadHombresSolteros+" y de mujeres: "+promedioEdadMujeres);				
}
