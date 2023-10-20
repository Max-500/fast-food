import { Client } from "./classes/Client.js";
import { Company } from "./classes/Company.js";

const company = new Company("The Prince Burger", "Suchiapa", 123456789);
const client = new Client("Leonardo Maximoff", "10-10-2003", 150);

company.ShowOfferts();


console.log(company.SellFood(1, 1, 1, client));
console.log(company.SellFood(1, 0, 1, client));
console.log(company.SellFood(0, 0, 0, client));