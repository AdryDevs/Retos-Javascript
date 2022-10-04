/* 1.- Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
 los dos. Si son iguales indicalo también. Puedes ir cambiando los valores para comprobar que funciona. */

   //  var num1 = 12;
   //  var num2 = 9;

   //  if (num1 < num2) {
   //     console.log("El primero número es menor que el segundo")
   //  } else if (num1 > num2) {
   //     console.log("El segundo número es menor que el primero")
   //  } else {
   //     console.log("Los números son iguales")
   //  };

//  2.- Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.

   // var name = "Adrián";

   // console.log("Bienvenido ", name)  la coma ya da un espacio. Es mejor utilizar coma porque respeta si es string o number el de después.
   
// 3.- Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir (recuerda usar prompt).

   // var name = prompt("Introduce tu nombre");

   // console.log("Bienvenido " + name);

// 4.- Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado (recuerda pasar de String a double con parseDouble). Usa la constante PI.

   // var radio = prompt("Introduce el radio del círculo");

   // var area = Math.PI * Math.pow(radio, 2);

   // console.log ("El area es " + area);

// 5.-Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también debemos indicarlo.

   // var num = prompt("Introduce un número");

   // if (num%2 == 0) {
   //    console.log ("El resto da 0, el número es divisible entre 2")
   // } else {
   //    console.log("El resto no da 0, el número no es divisible entre 2")
   // };

// 6.- Lee un número por teclado que pida el precio de un producto (puede tener decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del 21%

   // let num1 = parseFloat(prompt("Introduce un precio"));
   // const IVA = 0.21;

   // function calcularIVA() {

   //    let precioConIVA = IVA * num1 + num1;


   
   //    return console.log("El precio con IVA es de ",precioConIVA, "€")
   // }

   // calcularIVA();


   // 7.- Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

   // let i = 0;

   // while (i < 100) {
   //    i++;
   //    console.log(i);
   // }


   // 8.- Haz el mismo ejercicio anterior con un bucle for.

   // for (let i=1; i <= 100; i++) {
   //    console.log(i);
   // }

   // 9.- Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees.

   // for (let i = 1; i <= 100; i++){
   //    if ((i % 2 == 0) && (i % 3 ==0)){
   //       console.log (i)
   //    }
   // }

   // 10.- Realiza una aplicación que nos pida un número de ventas a introducir, después nos pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

   // let i = parseInt(prompt("Introduce número de ventas"));
   
   // let total = "";

   // while (i > 0) {
   //    i--;
   //    let venta = parseInt(prompt("Introduce un precio de producto"));
   //    total = parseInt(total + venta);
      
   // }

   // console.log(total);

   // 11.- Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.

   // let diaSemana = prompt("Introduce un día de la semana para saber si es laboral o no");

   // switch (diaSemana) {
   //    case "Lunes":
   //    case "Martes":
   //    case "Miércoles":
   //    case "Jueves":
   //    case "Viernes":  
   //       console.log("Es un día laboral")       
   //       break;
      
   //    case "Sábado":
   //    case "Domingo":
   //       console.log("No es un día laboral")
   //       break;
   //    default:
   //       console.log("No has introducido un día de la semana")
   //       break;
   // }

   // 12.- Escribe una aplicación con un String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

   // let password = "123456";

   // let intento;

   // let i = 0;

   // while ((intento !== password) && (i < 3)) {
   //    i++;
   //    intento = prompt("Introduce la contraseña");
   // }

   // if (intento === password) {
   //    console.log("Enhorabuena");
   // } else {
   //    console.log("Constraseña incorrecta");
   // }

   // 13.- Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
   // Los signos aritméticos disponibles son:
   // +: suma los dos operandos.
   // -: resta los operandos.
   // *: multiplica los operandos.
   // /: divide los operandos, este debe dar un resultado con decimales (double)
   // ^: 1º operando como base y 2º como exponente.
   // %: módulo,

//    function CalculadoraInversa() {
//       let num1 = parseInt(prompt("Introduce el primer número"));
//       let signo = prompt("Introduce el tipo de operación");
//       let num2 = parseInt(prompt("Introduce el segundo número"));
    
//       if (isNaN(num1) || isNaN(num2)) {
//          alert("Introduce un número correcto")
//       } else {
//       switch (signo) {
//          case "+":
//             alert(num1+num2)
//             break;

//          case "-":
//             alert(num1-num2)
//             break;

//          case "x":
//             alert(num1*num2)
//             break;
         
//          case "/":
//             alert(num1/num2)
//             break;

//          case "^":
//             alert(math.pow(num1,num2))
//             break;

//          case "%":
//             alert(num1%num2)
//          default:
//             alert("Introduce un signo válido")
//             break;
//       }
//    }
// }

//    CalculadoraInversa()