const billInput = document.getElementById('firstInput')
const peopleInput= document.getElementById('secondInput')
const tip = document.getElementById('tipTotal')
const total = document.getElementById('perPerson')
const custominput = document.getElementById('custom')

function calculateTip(tipPercentage){
    const bill = parseFloat(billInput.value);
    const people = parseFloat(peopleInput.value);
   

    if (isNaN(bill) || isNaN(people) ){
        tip.textContent = '$0.00';
        total.textContent = '$0.00';
        alert("Please enter a number")
        return;
    }
    else if(people ==0){
        alert("People cant be 0")
        return
    }
      

    const tipAmount = (tipPercentage * bill / 100)/people;
    tip.textContent = '$' + tipAmount.toFixed(2);
    
    const totalAmount = (bill / people) + tipAmount;
    total.textContent = '$' + totalAmount.toFixed(2);



}


document.getElementById('one').addEventListener('click', function(){
    calculateTip(5);
});

document.getElementById('second').addEventListener('click', function(){
    calculateTip(10);
});

document.getElementById('three').addEventListener('click', function(){
    calculateTip(15);
});

document.getElementById('four').addEventListener('click', function(){
    calculateTip(25);
});

document.getElementById('five').addEventListener('click', function(){
    calculateTip(50);
});

document.getElementById('custom').addEventListener('input', function(){
    const customTip = parseFloat(this.value);

    if(!isNaN(customTip)){
        calculateTip(customTip);
        
    }
});

document.getElementById('reset').addEventListener('click', function() {
    billInput.value = '';
    peopleInput.value = '';
    custominput.value = '';
    tip.textContent = '$0.00';
    total.textContent = '$0.00';

});