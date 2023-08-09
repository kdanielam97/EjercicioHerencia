import { Cuenta } from "./cuenta";
export class CuentaCorriente extends Cuenta {
    protected sobreGiro:boolean
    constructor(saldo:number,tasaAnual:number, sobreGiro:boolean) {
        super(saldo, tasaAnual)
        this.sobreGiro = sobreGiro
    }
    setsobreGiro(sobreGiro:boolean){
        this.sobreGiro = sobreGiro
    }

    getsobreGiro(){
        return this.sobreGiro
    }  
}