import { Cuenta } from "./cuenta";
export class CuentaAhorros extends Cuenta {
    protected activa:boolean
    constructor(saldo:number,tasaAnual:number, activa:boolean) {
        super(saldo, tasaAnual)
        this.activa = activa
        
    }
    setactiva(activa:boolean){
        this.activa = activa
    }

    getactiva(){
        return this.activa
    }  
}

