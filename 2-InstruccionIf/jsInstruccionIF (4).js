function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<18&&edad>12)
	{
		alert("Usted es un adolescente");
	}
}