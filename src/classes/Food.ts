export class Food {
    public name :string;
    public value :number;
    public description :string;

    constructor(name :string, value :number, description :string){
        this.name = name;
        this.value = value;
        this.description = description;
    }

    toString() :string {
        return `Nombre: ${this.name}\nPrecio: $${this.value}\nDescripción: ${this.description}`;
    }
}