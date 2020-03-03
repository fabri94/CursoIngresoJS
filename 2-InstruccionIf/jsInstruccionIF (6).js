function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("Mayor");
	}
	else
	{	if(edad<13)
		{
			alert("Niño");
		}
		else	 
		{
			alert("Adolescente");
		}
	}
}