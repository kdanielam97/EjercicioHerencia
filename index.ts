import { CuentaAhorros } from "./cuentaAhorros";
import { CuentaCorriente } from "./cuentaCorriente";
import { Cuenta } from "./cuenta";

let cuenta1 = new Cuenta (2100000, 24)

cuenta1.consignar(600000)
cuenta1.retirar(10000)

cuenta1.generarExtractoMensual()

console.log("\n");

let cuentaAhorro1 = new CuentaAhorros(500000,22)
cuentaAhorro1.consignar(600000)
cuentaAhorro1.retirar(100000)

cuentaAhorro1.generarExtractoMensual()


console.log("\n");

let cuentaorriente1 = new CuentaCorriente(200000,22)
cuentaorriente1.consignar(700000)
cuentaorriente1.retirar(150000)

cuentaorriente1.generarExtractoMensual()

