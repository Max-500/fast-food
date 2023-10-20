import { Client } from "./Client.js";
import { Food } from "./Food.js";

export class Company {
    public name :string;
    public address :string
    public phone : number

    private burger = new Food("Hamburguesa", 100, "Una deliciosa hamburguesa con doble carne!!!")
    private frenchFries = new Food("Papas Fritas", 30, "Un paquete grande de papas fritas, muy deliciosas por cierto!!!")
    private coke = new Food("Refresco de Cola", 20, "Un delicioso refresco de cola de 600 ml, super refrescante por cierto!!!")

    constructor(name :string, address : string, phone :number){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    public SellFood(nCoke :number, nBurger :number, nFrenchFries :number, client :Client) :any {
        const dates = new Date();
        const actualDate = dates.getDay();
        
        if(nCoke === 0 && nBurger === 0 && nFrenchFries === 0){
            return "Largo de aqui pobre";
        }

        let total = (nBurger * this.burger.value) + (nCoke * this.coke.value) + (nFrenchFries * this.frenchFries.value);
        // Es martes de 2 x 1
        if (actualDate == 2) {
            if (this.VerifyMoney(total, client)) {
                return `Hola ${client.GetName()}, aqui tienes tu pedido del Martes Promo: ${nCoke * 2} Refrescos De Cola, ${nBurger * 2} Hamburguesas y ${nFrenchFries * 2} Papas Fritas`;
            } else {
                return `Hola ${client.GetName()}, falta dinero`;
            }
        } else {
            // Se lleva todo el combo
            if (nBurger > 0 && nCoke > 0 && nFrenchFries > 0) {
                total = total - ((30 * total) / 100)
                if (this.VerifyMoney(total, client)) {
                    return `Hola ${client.GetName()}, aqui tienes tu combo: ${nCoke} Refrescos De Cola, ${nBurger} Hamburguesas y ${nFrenchFries} Papas Fritas`;
                } else {
                    return `Hola ${client.GetName()}, falta dinero`;
                }
            // Se lleva solo papas fritas o bebida
            }else if (nBurger < 1) {
                total = total - ((50 * total) / 100)
                if (this.VerifyMoney(total, client)) {
                    return `Hola ${client.GetName()}, aqui tienes tus papas fritas y refresco: ${nCoke * 2} Refrescos De Cola y ${nFrenchFries * 2} Papas Fritas`;
                } else {
                    return `Hola ${client.GetName()}, falta dinero`;
                }
            } else {
                // Se llevo todo
                if (this.VerifyMoney(total, client)) {
                    return `Hola ${client.GetName()}, aqui tienes tu pedido: ${nCoke} Refrescos De Cola, ${nBurger} Hamburguesas y ${nFrenchFries} Papas Fritas`;
                } else {
                    return `Hola ${client.GetName()}, falta dinero`;
                }
            }
        }

    }

    private VerifyMoney(totalAmount :number, client :Client) :boolean {
        if(totalAmount >= client.GetMoney()){
            return false;
        }else {
            const changeAmount = client.GetMoney() - totalAmount;
            client.SetMoney(changeAmount)
            return true;
        }
    }

    public ShowOfferts () :void {
        console.log(`Hola!!!, nosostros somos ${this.name} y estamos emocionados por atenderte, ordena lo que quieras, nuestro menú es el siguiente\n`)

        console.log(`${this.coke.toString()}\n`);
        console.log(`${this.burger.toString()}\n`);
        console.log(`${this.frenchFries.toString()}\n`);

        console.log("Las promociones son las siguientes!!!");

        console.log("Si es martes, todo lo que lleves se te multiplicara por 2, pero al precio de uno!!!!");
        console.log("Si te llevas minimo 1 cosa de todo nuestro menú se te aplicara el descuento del 30% sobre el costo total");
        console.log("Si solo quieres papas fritas o bebida, se te aplicara el 50% sobre el costo total")

        console.log("Nota: Si es martes las demas promociones no son aplicables\n")
    }

}