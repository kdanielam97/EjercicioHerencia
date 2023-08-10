import { Cuenta } from "./cuenta";
export class CuentaCorriente extends Cuenta {
    protected sobreGiro:number
    constructor(saldo:number,tasaAnual:number) {
        super(saldo, tasaAnual)
        this.sobreGiro = 0
    }
    setsobreGiro(sobreGiro:number){
        this.sobreGiro = sobreGiro
    }

    getsobreGiro(){
        return this.sobreGiro
    }  

    retirar(valorRetirar:number) {
        const retiro: number = this.saldo;
        if (valorRetirar > this.saldo) {
          this.sobreGiro = this.saldo - valorRetirar;
          this.saldo = 0;
          this.numeroRetiros += 1;
          console.log(
            `retiro numero ${this.numeroRetiros}\n 
            valor retiro = ${retiro}\n Nuevo saldo = ${this.saldo}\n
             sobregiro =  $${this.sobreGiro}`
          );
        } else {
          this.numeroRetiros += 1;
          this.saldo -= valorRetirar;
          console.log(
            `retiro numero ${this.numeroRetiros}\n 
            valor retiro = ${valorRetirar}\n 
            Nuevo saldo = ${this.saldo}`
          );
        }
      }
      consignar(valorConsignar: number) {
               
        let diferencia = valorConsignar - this.sobreGiro;
        if (diferencia <= 0 && this.sobreGiro > 0) {
          this.sobreGiro += valorConsignar;
          console.log(`El saldo de tu sobregiro es = ${this.sobreGiro}`);
        } else {
          if (valorConsignar > 0) {
          this.saldo += diferencia;
          this.sobreGiro = 0;
          console.log(
            `consignacion= ${diferencia}\n Nuevo saldo = ${this.saldo}`
          );
          } else {
            console.log("El valor ingresado no es valido");
            
          }
          
        }
      }
    }