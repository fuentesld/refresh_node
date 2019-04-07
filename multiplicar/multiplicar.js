const fs = require("fs");

let listarTabla = (base, limite = 10) => {
  for (let index = 1; index <= limite; index++) {
    console.log(`${base} x ${index} = ${base * index}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor "${base}" NO es un número`);
      return;
    }
    let data1 = "";
    for (let index = 1; index <= limite; index++) {
      data1 += `${base} x ${index} = ${base * index}\n`;
    }

    const data = new Uint8Array(Buffer.from(data1));
    fs.writeFile(`./tablas/tabla-del-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-del-${base}.txt`);
    });
  });
};

module.exports = { crearArchivo, listarTabla };
