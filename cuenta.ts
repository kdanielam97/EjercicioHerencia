export class Cuenta {
    protected saldo:number
    protected numeroConsignaciones:number
    protected numeroRetiros:number
    protected tasaAnual:number
    protected comisionMensual:number

    constructor(saldo:number,tasaAnual:number){
        this.saldo = saldo
        this.numeroConsignaciones = 0
        this.numeroRetiros = 0
        this.tasaAnual = tasaAnual
        this.comisionMensual = 0
    }

    setsaldo(saldo:number){
        this.saldo = saldo
    }
    settasaAnual(tasaAnual:number){
        this.tasaAnual = tasaAnual
    }
  

    getsaldo(){
        return this.saldo
    }    
    gettasaAnual(){
        return this.tasaAnual
    }    

    


}