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
///consignar
    public consignar(valorConsignar:number){
        this.saldo += valorConsignar;
        console.log(`valor consignado ${valorConsignar}\n saldo ${this.saldo}`);
        
}
///retirar
    public retirar(valorRetirar:number){
        if (valorRetirar > this.saldo) {
            console.log("No es posible retirar");
            
            
        } else {
            this.saldo -= valorRetirar;
            console.log(`valor a retirar ${valorRetirar}\n saldo ${this.saldo}`);  
        }
    }
/// interes mensual

    public calcularInteresMensual():number{
        let interesMensual= this.saldo * ((this.tasaAnual/12)/100 )
        //this.saldo += interesMensual
        return interesMensual;
        
}
    public generarExtractoMensual(){
        


this.comisionMensual= this.saldo * 0.05  
console.log(this.saldo);

let interes =this.calcularInteresMensual()
console.log(interes);
console.log(this.comisionMensual);


let nuevoSaldo = this.saldo+interes-this.comisionMensual
console.log(`comision mensual ${this.comisionMensual} interes mensual ${interes} saldo ${nuevoSaldo}` );


}   
}