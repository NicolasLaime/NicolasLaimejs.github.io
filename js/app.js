let notas

let promedio
let suma=0

let cantidadNotas= parseInt(prompt(" digite la cantidad de notas a promediar "));
for(i=0; i < cantidadNotas; i++){
    let notas= parseInt(prompt( " digite la nota " + i ));
    suma = suma + notas;

    
}

promedio = suma / cantidadNotas;

alert(" el resultado es " + promedio);
if(promedio>=0 && promedio<=10) {
    alert( "lo siento estas desaprobado ")
}

else if(promedio>10 && promedio<=20){
    alert("felicidades estas aprobado")
}

else {
    alert( "ingresaste notas fuera de rango")
}

