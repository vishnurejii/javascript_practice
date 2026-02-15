//banking system

//level1

// const account={
//     accountNo:"001",
//     name:"vishnu",
//     balance:0,
//     transactions:[]
// }

// const deposit=(amount)=>{
//     if(amount<=0){
//         console.log("amount must be greater than 0")
//     }

//     account.balance+=amount
//     account.transactions.push({type:"deposite",amount})
//     console.log("deposit successful")
// }

// const withdraw=(amount)=>{
//     if(amount<account.balance){
//         console.log("inefficient balance")
//     }
//     account.balance-=amount
//     account.transactions.push({type:"withdraw",amount})

// }

// const checkBalance=()=>{
//     console.log("current balance: "+account.balance)
//     console.table(account.transactions)
// }

// deposit(10000)
// withdraw(500)
// checkBalance()


//level 2

const bank={
    bankName:"icici bank",
    accounts:[],
    nextAccountNumber:1001
}

const createAccount=(name)=>{
    const newAccount={
        accountNumber:bank.nextAccountNumber++,
        name,
        balance:0,
        transactions:[]
    }

    bank.accounts.push(newAccount)
    console.log("account created for",name)
}

const findAccount=(accNo)=>{
    const account=bank.accounts.find(acc=>acc.accountNumber===accNo)
    if(!account){
         console.log("account not found")
         return null
    }

    console.table(account)
    return account
   
}


const deposit=(accNo,amount)=>{
    const account=findAccount(accNo)

    if(!account){
        console.log("account not found")
        return null
    }
    if(amount<=0){
        console.log("amount must be greater than 0")
        return
    }

    account.balance+=amount
    account.transactions.push({type:"deposit",amount})
    console.log("deposit successfu;")
}


const withdraw=(accNo,amount)=>{
    const account=findAccount(accNo)

     if(!account){
        console.log("account not found")
        return
    }

    if(amount>account.balance){
        console.log("inefficient balance")
        return
    }

    account.balance-=amount
    account.transactions.push({type:"withdraw",amount})
    console.log("withdrawal successful")
}


const transfer=(fromAcc,toAcc,amount)=>{
    const sender=findAccount(fromAcc)
    const receiver=findAccount(toAcc)

    if(!sender || !receiver){
        console.log("account not found")
        return
    }

    if(amount>sender.balance){
        console.log("insufficient balance")
        return
    }

    sender.balance-=amount
    receiver.balance+=amount

    sender.transactions.push({type:"transfer sent",amount})
    receiver.transactions.push({type:"transfer receive",amount})

    console.log("transfer successful")
}


const showAllAccounts=()=>{
    console.table(bank.accounts)
}


createAccount("vishnu")
createAccount("sam")



deposit(1001,5000)
deposit(1002,2000)
findAccount(1001)
withdraw(1002,500)
findAccount(1002)
transfer(1001,1002,4500)
showAllAccounts()