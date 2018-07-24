var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var valor = 0;
// cont++ ... ++cont... cont+=1 ... Pro incremento, pre incremento al tener el plus despues, primero lo muestra y despues lo suma;
/* Bandera  */
function comenzar()
{
	eleccionMaquina = math.floor(math.random()*3)+1;
	} 	
}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1){
		ContadorDeEmpates++
	}
	else if (eleccionMaquina == 2){
		ContadorDePerdidas++
	}
	else if (eleccionMaquina == 3){
		ContadorDeGanadas++
	}
}
function papel()
{
	if (eleccionMaquina == 1){
		ContadorDeGanadas++
	}
	else if (eleccionMaquina == 2){
		ContadorDeEmpates++
	}
	else if (eleccionMaquina == 3){
		ContadorDePerdidas++
	}
}
function tijera() 
{
	if (eleccionMaquina == 1){
		ContadorDePerdidas++
	}
	else if (eleccionMaquina == 2){
		ContadorDeGanadas++
	}
	else if (eleccionMaquina == 3){
		ContadorDeEmpates++
	}
}

function mostrarResultado()
{
	document.getElementById('')
}