/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lampara;
 	var marca;
 	var impuesto;
 	var precioLampara;
 	var precioFinal;
 	var porcentaje;

 	precioLampara=lampara*35
 	lampara=document.getElementById('Cantidad').value;
 	lampara=parseInt(lampara);
 	marca=document.getElementById('Marca').value;

 	if(lampara>5)
 		{
 			porcentaje=50
 		}	
 	else
 		{
 			if(lampara==5)
 			{
 				if(marca=="ArgentinaLuz")
 				{
 					porcentaje=40
 				}
 				else
 				{
 					porcentaje=30
 				}
 			}
 			else
 			{
 				if(lampara==4)
 				{
 					if(marca=="ArgentinaLuz" || "“FelipeLamparas”")
 				}
 			}
 		}
 	precioFinal=(lampara * 35) - ((lampara * 35)*porcentaje/100);
 	document.getElementById('precioDescuento').value=precioFinal;
}