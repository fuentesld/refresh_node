let empleados = [
  { id: 1, nombre: "Luis" },
  { id: 2, nombre: "Alba" },
  { id: 3, nombre: "Wiggo" }
];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getEmpleadoById = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe un empleado con ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`El empleado ${empleado.nombre} no tiene salario asignado`);
    } else {
      resolve(salarioDB.salario);
    }
  });
};

getEmpleadoById(1).then(
  empleado => {
    console.log("Empleado de BD", empleado);
    getSalario(empleado).then(
      salario => {
        console.log(`Salario asignado $ ${salario}`);
      },
      err => {
        console.log(err);
      }
    );
  },
  err => {
    console.log(err);
  }
);
