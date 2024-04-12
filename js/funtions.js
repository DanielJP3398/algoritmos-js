
var numero;
var resul;

function punto1() {
    let nombre = prompt('Hola cual es tu nombre?');
    let edad = parseInt(prompt('Hola cual es tu edad'));
    if (!isNaN(edad))/*si la edad n es un numero*/ {
        /*edad.parseInt(edad);*/
        let resultado = "Hola " + nombre + " Tienes " + edad + " Años y el año que vienes tendras " + (edad + 1);
        alert(resultado);
    } else {
        alert("No puedes ingresar letras en la edad");
    }
    console.log('Se almaceno en nombre ${nombre} y en edad ${edad}');
}

function punto2() {

    op = prompt("ingrese la opcion 1 para triangulo 2 para rectangulo y 3 para circulo");
    let b, h, a;
    switch (parseInt(op)) {
        case 1:
            b = prompt("ingrese la base del triangulo: ");
            h = prompt("ingrese la altura: ");
            a = (b * h) / 2;
            alert("el area del triangulo es: " + a);
            break;
        case 2:
            b = prompt("ingrese la base del rectangulo: ");
            h = prompt("ingrese la haltura del rectangulo: ");
            a = b * h;
            alert("el area del rectangulo es: " + a);
            break;
        case 3:
            let pi, r, area;
            r = prompt("ingrese radio del circulo: ");
            pi = 3.14;
            area = (pi * (r * r));
            alert("el area del circulo es: " + area);
            break;
        default:
            alert("esta opcion no existe");
            break;
    }

}

function punto3() {
    numero = prompt("ingrese un numero ");
    for (i = 1; i <= numero; i++) {
        if (numero % 2 == 0) {
            alert("el " + numero + " es par " + i * 2);
        } else {
            alert("el " + numero + " es impar " + i++);
        }
    }
}

function punto4() {
    numero = prompt("ingrese un numero entero mayor a 1");
    if (numero > 1) {
        let div = 0;
        for (i = 2; i < numero; i++) {
            if (numero % i == 0) {
                div++;
            }
        }
        if (div > 0) {
            alert("no es primo");
        } else {
            alert("es primo");
        }
        if (isNaN(numero)) {
            alert("solo numeros pendejo");
        }
    }
}

function punto5() {
    numero = prompt("ingrese numero ");
    let factorial = 1;
    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;

        }
        alert("factorial es: " + factorial);
    } else {
        alert("debe ser mayor a 0")
    }
}
/*document.querySelector("#cinco").addEventListener("click",function);*/

function punto6() {
    /*numero = prompt("introduzca numeros ");
    let suma = 0;
    let contador = 1;
    do{
        alert(contador);
        suma += contador;
        contador++;
    }while(contador>=numero);
    alert("la suma es "+suma);*/

    numero = prompt("introduzca numeros ");
    let suma = 0;
    let contador = 1;
    do {
        numero = parseInt(numero);
        suma += numero;
        contador++;
    } while (suma < 50);
    if (suma > 50) {
        alert("Ha introducido un total de " + contador + " números.");

    }
    alert("Ha introducido un total de " + numero + " números.");
    alert("La suma total es " + suma + ".");

}

function punto7() {
    // numero[4, 5, 1, 2, 3];
    // /*let par[];
    // let impar;
    // */
    // console.log(numero);

    // nombre = prompt("ingrese su nombre")
    // apellido = prompt("ingrese su apellido")
    // alert(`su nombre es: ${nombre} y su apellido es  ${apellido}`)

    // const gusto1 = prompt("Por favor ingresa tu primer gusto de helado:");
    // const gusto2 = prompt("Por favor ingresa tu segundo gusto de helado:");
    // const gusto3 = prompt("Por favor ingresa tu tercer gusto de helado:");

    // const mensaje = "Aquí tienes tu helado de " + gusto1 + ", " + gusto2 + " y " + gusto3 + "!";

    // alert(mensaje);

    arrayNumeros[4, 5, 1, 2, 3, -5 , 7, -12, 9, -2];
    

}

function punto8() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];;
    numero = prompt("Introduce tu número de DNI (sin la letra)");
    let letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
    letra = letra.toUpperCase();/*Convierte todos los caracteres alfabéticos de una cadena a mayúsculas.*/
    if (numero < 0 || numero > 99999999) {/*no negativos ni mayores a 8 digitos*/
        alert("El número proporcionado no es válido");
    }
    else {
        let letraCalculada = letras[numero % 23];
        if (letraCalculada != letra) {
            alert("La letra o el número proporcionados no son correctos");
        }
        else {
            alert("El número de DNI y su letra son correctos");
        }
    }


}
