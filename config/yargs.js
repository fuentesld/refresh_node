const opcs = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    default: 10,
    alias: "l"
  }
};

const argv = require("yargs")
  .command("listar", "Imprime en la consola la tabla de multiplicar", opcs)
  .command("crear", "Genera un archivo con la tabla de multiplicar", opcs)
  .help().argv;

module.exports = { argv };
