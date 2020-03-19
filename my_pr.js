let money, time; 

function start() {
    money = +prompt('Your budget for a month?', ''),
    time  = prompt('Insert a date in YYYY-MM-DD','');
    
    
}

    
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {}, 
    income: [],
    timeData: time,
    savings: false
}

// Added cycle instead below
// let a1 = prompt('Required expenses in a month?',''),
//     a2 = prompt('How much it will cost?',''),
//     a3 = prompt('Required expenses in a month?',''),
//     a4 = prompt('How much it will cost?','');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i=0; i<2; i++){
    let a = prompt('Required expenses in a month?',''),
        b = prompt('How much it will cost?','');

if (typeof(a) === 'string' && typeof(a) != null && (typeof(b) != null && a != '' && b != '' && a.length < 50))
    {
        console.log('done');
        appData.expenses[a] = b;
    }

}

appData.moneyPerDay = appData.budget / 30;
alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay <100){
console.log("This is minimum");
} else if ((appData.moneyPerDay >100 && appData.moneyPerDay <2000)){
    console.log('You are in the middle');
} else if (appData.moneyPerDay >2000) {
    console.log("You are awesome!");
} else {
    console.log("Other error");
}
