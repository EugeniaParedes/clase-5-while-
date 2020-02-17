function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0;

	while(contador < 5)
	{
		valor= prompt ("ingrese 5 numeros");
		acumulador = acumulador + parseInt(valor);
		contador++;
		
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN