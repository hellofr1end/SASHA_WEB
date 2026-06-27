
// class Cat {
//     constructor(){
//         this.#name = "Снежок"
//         this.color = "Белый"
//         this.age = 7
//     }


// }

// // Инкапсуляция
// // 

// let chernish = new Cat()


// console.log("имя:", chernish.name, "| цвет:", chernish.color, "| возраст: ", chernish.age)




class BankAccount{
    #owner_name
    #balance
    constructor(owner_name, balance){
        this.#owner_name = owner_name
        this.#balance = balance
    }

    ShowBalance(){
        console.log(this.#balance)
    }
    
    Deposit(amount){
        if (amount <= 0){
            console.log("некорректное количество денег")
        }
        else{
            console.log("Баланс пополнен на ", amount)
            this.#balance += amount
        }
    }
 
    Withdraw(amount){
        if (amount > this.#balance){
            console.log("недостаточно средств", "у вас:", this.#balance, "пыталисьс снять:", amount)
        }
        else{
            this.#balance -= amount
        }
    }
}

class Converter{
    
}

let sashaSber = new BankAccount("Александр", 1000)

let vovaTBank = new BankAccount("Владимир", 1200)

let petyaAlfaBank = new BankAccount("Петр", 2500) // у пети в теньге

//...
// Все объекты ведут себя как мы описали в классе BankAccount

sashaSber.ShowBalance()



// function StealMoney(acc){
//     console.log("хихи деньги украдены")
//     acc.balance = 0
// }

// StealMoney(sashaSber)
sashaSber.Deposit(-2000)
sashaSber.Deposit(2000)
sashaSber.ShowBalance()

sashaSber.Withdraw(3500)

sashaSber.Withdraw(2900)
sashaSber.ShowBalance()
