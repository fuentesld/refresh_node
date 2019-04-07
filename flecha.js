let nombre = "Clark";
let apellido = "Kent";
let poder = "vuela";

let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "regeneración",
  getNombre() {
    // this.nombre = "Clark1";
    // this.apellido = "Kent1";
    // this.poder = "vuela1";
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  }
};

console.log(deadpool.getNombre());
