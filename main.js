//  Simulacion de socios de un club

function validarOpcion(min, max, opcion) {
  while (opcion < min || opcion > max) {
    alert(`Opcion inválida. Ingrese un número entre ${min} y ${max}`);
    opcion = parseInt(prompt("Opción elegida"));
  }
  return opcion;
}

function menu() {
  let rta = parseInt(
    prompt(
      "* * * * * CLUB CODERHOUSE * * * * * \n1. Alta socio\n2. Listar socios\n3. Consultar deuda socio \n4. Modificar socio\n5. Baja socio\n0. Salir"
    )
  );

  return rta;
}


function altaSocio() {
  0
}





// Programa Principal

let op = 1;

do {
  op = menu();
  while (op < 0 || op > 5) {
    op = validarOpcion(0, 5, op);
  }
  switch (op) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 0:
      break;
  }
} while (op != 0);
