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

// const bank={
//     bankName:"icici bank",
//     accounts:[],
//     nextAccountNumber:1001
// }

// const createAccount=(name)=>{
//     const newAccount={
//         accountNumber:bank.nextAccountNumber++,
//         name,
//         balance:0,
//         transactions:[]
//     }

//     bank.accounts.push(newAccount)
//     console.log("account created for",name)
// }

// const findAccount=(accNo)=>{
//     const account=bank.accounts.find(acc=>acc.accountNumber===accNo)
//     if(!account){
//          console.log("account not found")
//          return null
//     }

//     console.table(account)
//     return account
   
// }


// const deposit=(accNo,amount)=>{
//     const account=findAccount(accNo)

//     if(!account){
//         console.log("account not found")
//         return null
//     }
//     if(amount<=0){
//         console.log("amount must be greater than 0")
//         return
//     }

//     account.balance+=amount
//     account.transactions.push({type:"deposit",amount})
//     console.log("deposit successfu;")
// }


// const withdraw=(accNo,amount)=>{
//     const account=findAccount(accNo)

//      if(!account){
//         console.log("account not found")
//         return
//     }

//     if(amount>account.balance){
//         console.log("inefficient balance")
//         return
//     }

//     account.balance-=amount
//     account.transactions.push({type:"withdraw",amount})
//     console.log("withdrawal successful")
// }


// const transfer=(fromAcc,toAcc,amount)=>{
//     const sender=findAccount(fromAcc)
//     const receiver=findAccount(toAcc)

//     if(!sender || !receiver){
//         console.log("account not found")
//         return
//     }

//     if(amount>sender.balance){
//         console.log("insufficient balance")
//         return
//     }

//     sender.balance-=amount
//     receiver.balance+=amount

//     sender.transactions.push({type:"transfer sent",amount})
//     receiver.transactions.push({type:"transfer receive",amount})

//     console.log("transfer successful")
// }


// const showAllAccounts=()=>{
//     console.table(bank.accounts)
// }


// createAccount("vishnu")
// createAccount("sam")



// deposit(1001,5000)
// deposit(1002,2000)
// findAccount(1001)
// withdraw(1002,500)
// findAccount(1002)
// transfer(1001,1002,4500)
// showAllAccounts()



//level 3********************************

const bank={
    bankName:"icici bank",
    accounts:[],
    nextAccountNumber:2001
}

const createAccount=(name,type)=>{
    const newAccount={
        accountNumber:bank.nextAccountNumber++,
        name,
        type,
        balance:type==="savings"?1000:0,
        transactions:[],
        loan:0
    }
    bank.accounts.push(newAccount)
}

const findAccount=(accNo)=>{
    const account=bank.accounts.find(acc=>acc.accountNumber===accNo)
    console.log(account)
    return account
}

const deposit=(accNo,amount)=>{
    const account=findAccount(accNo)

    if(!account || amount<=0){
        console.log("error please try again")
        return
    }

    account.balance+=amount
    account.transactions.push({type:"deposit",amount})
    console.log("deposit successful")
}


const withdraw=(accNo,amount)=>{
    const account=findAccount(accNo)

    if(!account){
        console.log("no account found")
        return
    }
    if(account.type==="savings" && account.balance-amount < 1000){
        console.log("minimum balance 1000 required")
        return
    }

    if(amount>account.balance){
        console.log("insufficient balance")
        return
    }

    account.balance-=amount
    account.transactions.push({type:"withdraw",amount})
    console.log("withdraw successful")
}

const applyInterest=(accNo)=>{
    const account=findAccount(accNo)

    if(!account){
        console.log("no account found")
        return
    }
    if(account.type==="savings"){
        const interest=account.balance*0.04
        account.balance+=interest
        account.transactions.push({type:"interest",amount:interest})
    }
}

const applyLoan=(accNo,amount)=>{
    const account=findAccount(accNo)

    if(!account){
        console.log("no account found")
        return
    }
    const maxLoan=account.balance*5

    if(amount>maxLoan){
        console.log("loan exceeds limit")
        return
    }

    account.loan+=amount
    account.balance+=amount
    account.transactions.push({type:"loan",amount})
}

const totalBankBalance=()=>{
    const total=bank.accounts.reduce((sum,acc)=>sum+acc.balance,0)
    console.log("total balance :",total)
}

const totalLoan=()=>{
    const total=bank.accounts.reduce((sum,acc)=>sum+acc.loan,0)

    console.log("total loans: ",total)
}

createAccount("Arun", "savings");
createAccount("Priya", "current");

deposit(2001, 5000);
applyInterest(2001);
applyLoan(2002, 3000);

totalBankBalance();
totalLoan();