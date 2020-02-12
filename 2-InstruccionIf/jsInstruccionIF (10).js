function mostrar()
{
	var random;
	random= Math.floor((Math.random() *10) + 1);

		if(random<4)
			{
				alert("Vamos la proxima se puede");
			}
		else
			{
				if(random>8)
					{
						alert("Excelente");
					}
				else
					{
						alert("Aprobó");
					}	
			}
}