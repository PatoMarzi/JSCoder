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

function programaPrincipal() {
  let op = 1;

  do {
    op = menu();
    while (op < 0 || op > 5) {
      op = validarOpcion(0, 5, op);
    }
    switch (op) {
      case 1:
        altaSocio();
        break;
      case 2:
        listaSocio();
        break;
      case 3:
        deudaSocio();
        break;
      case 4:
        modificarSocio();
        break;
      case 5:
        bajaSocio();
        break;
      case 0:
        alert("Usted ha elegido salir");
        break;
    }
  } while (op != 0);
  return op;
}

// Función para dar alta un socio

function altaSocio() {
  let nSocio = cantSocios++;
  let nbre = prompt("Ingrese el nombre del socio: ");
  let ape = prompt("Ingrese el apellido del socio: ");
  let dir = prompt("Ingrese la dirección del socio: ");
  let tel = prompt("Ingrese el teléfono del socio: ");
  s = new Socio(nSocio, nbre, ape, dir, tel, 0, 0);
  socios.push(s);
  alert("¡Nuevo socio registrado exitosamente!");
  alert(
    `Nro Socio: ${socios[nSocio].nroSocio} \nNombre: ${socios[nSocio].nombre}\nApellido: ${socios[nSocio].apellido}\nDirección: ${socios[nSocio].direccion}\nTeléfono: ${socios[nSocio].telefono}\nDeuda: $${socios[nSocio].deuda} pesos\nAntigüedad: ${socios[nSocio].antiguedad} años`
  );
}

// Función para dar de baja un socio

function bajaSocio() {
  let n = parseInt(prompt("Ingrese el número de socio a dar de baja: "));
  let 
}

function listaSocio() {}

function deudaSocio() {}

function modificarSocio() {}

function Socio(
  nroSocio,
  nombre,
  apellido,
  direccion,
  telefono,
  deuda,
  antiguedad
) {
  this.nroSocio = nroSocio;
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
  this.telefono = telefono;
  this.deuda = deuda;
  this.antiguedad = antiguedad;
}

function baseDeDatos() {
  s1 = new Socio(
    1,
    "Sergio",
    "Marsoles",
    "Pellegrini 552",
    "4329438",
    2300,
    12
  );
  socios.push(s1);
  s1 = new Socio(2, "Silvina", "Mintera", "Laprida 1232", "4623463", 15000, 4);
  socios.push(s1);
  s1 = new Socio(3, "Josefina", "Asturia", "Cordoba 32", "4422348", 544, 3);
  socios.push(s1);
  s1 = new Socio(4, "Carla", "Oliva", "Italia 1232", "4985674", 140, 3);
  socios.push(s1);
  s1 = new Socio(5, "Kevin", "Macin", "Montevideo 1232", "4544457", 0, 3);
  socios.push(s1);
  s1 = new Socio(
    6,
    "Angeles",
    "Fernandez",
    "Corrientes 1232",
    "4325622",
    7900,
    2
  );
  socios.push(s1);
  s1 = new Socio(7, "Pablo", "Derman", "Belgrano 1232", "4402342", 1434, 1);
  socios.push(s1);
  s1 = new Socio(8, "Samira", "Bartoly", "San Martin 5434", "4500510", 0, 11);
  socios.push(s1);
  s1 = new Socio(
    9,
    "Carolina",
    "Kjien",
    "Ovidio Lagos 1883",
    "4321012",
    20300,
    5
  );
  socios.push(s1);
  s1 = new Socio(10, "Sebastian", "Zuro", "Guerrero 1889", "4453341", 0, 20);
  socios.push(s1);
  s1 = new Socio(
    11,
    "Luciano",
    "Pedreti",
    "Pellegrini 1666",
    "4206940",
    2200,
    14
  );
  socios.push(s1);
}

// Programa Principal

let a = 1;

let socios = [];

baseDeDatos();

let cantSocios = 11;
console.log(socios[9]);
console.log(socios[8]);
console.log(socios[7]);
console.log(socios[6]);
console.log(socios[5]);
console.log(socios[4]);
console.log(socios[3]);
console.log(socios[2]);
console.log(socios[1]);

while (a != 0) {
  a = programaPrincipal();
}
