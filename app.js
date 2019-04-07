//
//
const colors = require("colors");
const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];
console.log(argv);
switch (comando) {
  case "listar":
    console.log("listar");
    listarTabla(argv.base, argv.limite);

    break;
  case "crear":
    console.log("crear", argv.base);
    crearArchivo(argv.base, argv.limite)
      .then(resultado => {
        console.log(`The file ${resultado} has been saved!`.yellow);
      })
      .catch(e => {
        console.log(e);
      });
    break;
  default:
    console.log("Comando no reconocido");
}
