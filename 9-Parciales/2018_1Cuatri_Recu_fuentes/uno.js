
function mostrar()
{
var base;
var altura;
var superficie;
var perimetro;
base = prompt("Ingrese la base del triangulo");
altura = prompt("Ingrese la altura del triangulo");
base = parseInt(base);
altura = parseInt(altura);
perimetro = base * 3;
superficie = base * altura / 2;
alert ("El perimetro es de "+ perimetro + " Y la superficie es de "+ superficie);
}
