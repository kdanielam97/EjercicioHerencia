import { Cuenta } from "./cuenta";
export class CuentaAhorros extends Cuenta {
    protected activa:boolean
    constructor(saldo:number,tasaAnual:number) {
        super(saldo, tasaAnual)
        this.activa = true
        
    }
    public seActiva(): boolean {
        if (this.saldo >= 10000) {
          return (this.activa = true);
        } else {
          return (this.activa = false);
        }
      }
      consignar(valorConsignar: number): void {
          if (this.seActiva()) {
            super.consignar(valorConsignar)
          } else {
            console.log("La cuenta esta inactiva");
            
          }
      }
      retirar(valorRetirar: number): void {
        if (this.seActiva()) {
            super.retirar(valorRetirar)
          } else {
            console.log("La cuenta esta inactiva");
            
          }
        
      }
      public retiros(): number {
        let cRetiros: number;
        if (this.numeroRetiros > 4) {
          cRetiros = this.numeroRetiros - 4;
          return cRetiros;
        } else {
          return 0;
        }
      }
      generarExtractoMensual(): void {
        super.generarExtractoMensual();
        
        this.comisionMensual = this.retiros() * 1000;
    
        if (this.seActiva()) {
          console.log("La cuenta esta Activa");
        } else {
          console.log("La cuenta esta Inactiva");
        }
      }
    getactiva(){
        return this.activa
    }  

    
}

