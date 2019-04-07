let empleados = [
  { id: 1, nombre: "Luis" },
  { id: 2, nombre: "Alba" },
  { id: 3, nombre: "Wiggo" }
];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getEmpleadoById = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe un empleado con ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback) => {
  salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`El empleado ${empleado.nombre} no tiene salario asignado`);
  } else {
    callback(null, salarioDB.salario);
  }
};

getEmpleadoById(4, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  console.log("Usuario base de datos", empleado);
  getSalario(empleado, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Salario asignado $ ${salario}`);
  });
});
