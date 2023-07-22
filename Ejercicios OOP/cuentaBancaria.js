class cuentaBancaria
{
    constructor(saldos)
    {
        this.saldos = saldos;
    }
    depositar(cantidad)
    {
        this.saldos += cantidad;
        return "El deposito se hizo correctamente";
    }
    retirar(cantidad)
    {
        this.saldos -= cantidad;
        return "El retiro se hizo correctamente.";
    }
    consultarSaldo()
    {
        return `Su saldo actual es de ${this.saldos}`;
    }
}

const miCuenta = new cuentaBancaria(5000);
console.log(miCuenta.depositar(5000));
console.log(miCuenta.retirar(12000));
console.log(miCuenta.consultarSaldo());
