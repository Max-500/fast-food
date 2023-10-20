export class Client {
    public name :string;
    public birthday :string;
    public money :number;

    constructor(name :string, birthday :string, money :number){
        this.name = name;
        this.birthday = birthday;
        this.money = money;
    }

    public GetName() :string {
        return this.name;
    }

    public SetName(name :string) :void {
        this.name = name
    }

    public GetBirthday() :string {
        return this.birthday;
    }

    public SetBirthday(birthday :string) :void {
        this.birthday = birthday
    }

    public GetMoney() :number {
        return this.money;
    }

    public SetMoney(money :number) :void {
        this.money = money;
    }
}