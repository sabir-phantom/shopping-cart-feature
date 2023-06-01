
function updateCaseNumber (isIncrease){
    let caseNumberField = document.getElementById('number-case');
    let caseNumberString = caseNumberField.value;
    let previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    
    // turnary operator
    isIncrease ? newCaseNumber = previousCaseNumber + 1 : newCaseNumber = previousCaseNumber - 1;

    // if(isIncrease){
    //     newCaseNumber = previousCaseNumber + 1;
    // }
    // else{
    //     newCaseNumber = previousCaseNumber - 1;
    // }

    caseNumberField.value = newCaseNumber;

    if(newCaseNumber > 0){
        document.getElementById('minus-case').removeAttribute('disabled');
    }
    else{
        // element.setAttribute(name, value) 
        document.getElementById('minus-case').setAttribute('disabled', 'true');
    }
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    let newPrice =  newCaseNumber * 59;
    document.getElementById('price-case').innerText = newPrice
    calcTotal();
}


// for Increament
document.getElementById('plus-case').addEventListener('click', function(){
    let newCaseNumber = updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);


});


// for Decreament
document.getElementById('minus-case').addEventListener('click', function(){
    let newCaseNumber = updateCaseNumber(false);

   updateCaseTotalPrice(newCaseNumber);


    // let existingPrice = document.getElementById('price-case');
    // let currentPrice = parseInt(existingPrice.innerText);
    // let newPrice = currentPrice - 59;

    // existingPrice.innerText = newPrice;



   
   
    // let caseNumberField = document.getElementById('number-case');
    // let caseNumberString = caseNumberField.value;
    // let previousCaseNumber = parseInt(caseNumberString);

    // let newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;

    // if(newCaseNumber == 0){
    //     // element.setAttribute(name, value) 
    //     this.setAttribute('disabled', 'true');
    // }

});


