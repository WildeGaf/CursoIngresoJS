function mostrar()
{
var nombre;
var cantidadPaginas;
var cantidadVentas;
var tema;
var respuesta;
var paginasPares = 0;
var paginasImpares = 0;
var ventasCero = 0;
contador = 0;
var paginasProgramacion;
var totalVentas;
respuesta = "si";
	while (respuesta == "si"){
		contador = contador + 1;
		nombre = prompt("Ingrese el nombre del libro");
		cantidadVentas = prompt ("Ingrese cantidad de ventas");
		cantidadVentas = parseInt(cantidadVentas);
		while (!isNaN(cantidadVentas)){
			cantidadVentas = prompt ("Ingrese cantidad de ventas");
			cantidadVentas = parseInt(cantidadVentas);
			}	
		cantidadPaginas = prompt ("Ingrese cantidad de paginas");
		cantidadPaginas = parseInt("cantidadPaginas");
		while (!isNaN(cantidadPaginas)){
			cantidadPaginas = prompt ("Ingrese cantidad de paginas");
			cantidadPaginas = parseInt("cantidadPaginas");
		}
		tema = prompt ("Ingrese el tema del libro: robótica, programación,patrones, base de datos");
			while (tema!="robótica" && tema != "programación" && tema!="patrones" && tema !="base de datos"){
				tema = prompt ("Ingrese el tema del libro: robótica, programación,patrones, base de datos");
			}
		if (paginas%2==0){
			paginasPares = paginasPares + 1; 
		} 
		else{
			paginasImpares = paginasImpares + 1;
		}
		if (ventas==0){
			ventasCero = ventasCero + 1;
		}
		totalVentas = cantidadVentas + totalVentas;
		if (tema == "programación"){
			paginasProgramacion = paginasProgramacion + cantidadPaginas;
		}
		respuesta = prompt ("Desea ingresar otro libro? si para continuar");
	}
promedio = totalVentas / contador;
}
