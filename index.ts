import { CuentaAhorros } from "./cuentaAhorros";
import { CuentaCorriente } from "./cuentaCorriente";
import { Cuenta } from "./cuenta";

let cuenta1 = new Cuenta (2100000, 24)

cuenta1.consignar(600000)
cuenta1.retirar(10000)

cuenta1.generarExtractoMensual()

let cuentaAhorro1 = new CuentaAhorros(2100000,22,true)
cuentaAhorro1.consignar(600000)
cuentaAhorro1.retirar(10000)


