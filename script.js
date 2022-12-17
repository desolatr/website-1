//before could not deckare var outside function because
//script would run before HTML elements are created
//fixed by moving var assigment in a function

function incomeCalc(){
    var income, rent, phone, teeth, ticket, laptop;
    var totalsum, totalsumtxt, moneyleft;
    
    income = document.querySelector("#income");
    rent = document.querySelector("#rent");
    phone = document.querySelector("#phone");
    teeth = document.querySelector("#teeth");
    ticket = document.querySelector("#ticket");
    laptop = document.querySelector("#laptop");
    totalsumtxt = document.querySelector("#totalsumtxt");
    leftafter = document.querySelector("#leftafter");
    
    totalsum = (parseInt(rent.value)+ 
                parseInt(phone.value)+
                parseInt(teeth.value)+
                parseInt(ticket.value)+
                parseInt(laptop.value));
    
    moneyleft = (parseInt(income.value) - totalsum);
    totalsumtxt.innerHTML = ("Total necessary spendings this month: " + totalsum + "€");
    leftafter.innerHTML = ("Left after necessary spendings: " + moneyleft + "€");
}


function constMonthly(){
    var crent, cphone, cteeth, cticket, claptop;
    crent = 550;
    cphone = 44;
    cteeth = 19;
    cticket = 72;
    claptop = 64;

    var rent, phone, teeth, ticket, laptop;
    rent = document.querySelector("#rent");
    phone = document.querySelector("#phone");
    teeth = document.querySelector("#teeth");
    ticket = document.querySelector("#ticket");
    laptop = document.querySelector("#laptop");

    rent.value = crent;
    phone.value = cphone;
    teeth.value = cteeth;
    ticket.value = cticket;
    laptop.value = claptop;
}








