let empleados = [
  { id: 1, nombre: "Luis" },
  { id: 2, nombre: "Alba" },
  { id: 3, nombre: "Wiggo" }
];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getEmpleadoById = id => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
    throw new Error(`No existe un empleado con ID ${id}`);
  } else {
    return empleadoDB;
  }
};

let getSalario = async empleado => {
  salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    throw new Error(`El empleado ${empleado.nombre} no tiene salario asignado`);
  } else {
    return salarioDB.salario;
  }
};

// getEmpleadoById(1).then(
//   empleado => {
//     console.log("Empleado de BD", empleado);
//     getSalario(empleado).then(
//       salario => {
//         console.log(`Salario asignado $ ${salario}`);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

let getInformacion = async id => {
  let empleado = await getEmpleadoById(id);
  let salario = await getSalario(empleado);
  console.log(empleado);
  console.log(salario);
  return `${empleado.nombre} tiene un salario de $${salario}`;
};

getInformacion(2)
  .then(respuesta => {
    console.log(respuesta);
  })
  .catch(err => {
    console.log(err);
  });
