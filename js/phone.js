
// document.getElementById('plus-phone').addEventListener('click', function(){
//     let phoneNumberField = document.getElementById('number-phone');
//     let phoneNumberString = phoneNumberField.value;
//     let previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber = previousPhoneNumber + 1;

//     phoneNumberField.value = newPhoneNumber;

//     if(newPhoneNumber > 0){
//         document.getElementById('minus-phone').removeAttribute('disabled');
//     }
// });


// document.getElementById('minus-phone').addEventListener('click', function(){
//     let phoneNumberField = document.getElementById('number-phone');
//     let phoneNumberString = phoneNumberField.value;
//     let previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber = previousPhoneNumber - 1;

//     phoneNumberField.value = newPhoneNumber;

//     if(newPhoneNumber == 0){
//         // element.setAttribute(name, value) 
//         this.setAttribute('disabled', 'true');
//     }
// });








function updatePhoneNumber(isIncrease) {
    let phoneNumberField = document.getElementById('number-phone')
    let phoneNumberString = phoneNumberField.value
    let previousPhoneNumber = parseInt(phoneNumberString)

    let newPhoneNumber;
    isIncrease ? newPhoneNumber = previousPhoneNumber + 1 : newPhoneNumber = previousPhoneNumber - 1

    phoneNumberField.value = newPhoneNumber

    if (newPhoneNumber == 0) {
        // element.setAttribute(name, value) 
        document.getElementById('minus-phone').setAttribute('disabled', 'true')
    }else{
        // element.removeAttribute(name) 
        document.getElementById('minus-phone').removeAttribute('disabled')
    }
    
    return newPhoneNumber
}


function updatePhoneTotalPrice(newPhoneNumber){
    let newPrice =  newPhoneNumber * 1219
    document.getElementById('price-phone').innerText = newPrice
    calcTotal();
}

// plus button 
document.getElementById('plus-phone').addEventListener('click', function () {
    let newPhoneNumber = updatePhoneNumber(true)

    updatePhoneTotalPrice(newPhoneNumber);
    
    
})
//minus button
document.getElementById('minus-phone').addEventListener('click', function () {
    let newPhoneNumber = updatePhoneNumber(false)

    updatePhoneTotalPrice(newPhoneNumber);
    
    // let newPrice =  newPhoneNumber * 1219
    // document.getElementById('price-phone').innerText = newPrice

    // let existing_price_tag = document.getElementById('price-phone')
    // let exisiting_price = parseInt(existing_price_tag.innerText)
    // let newPrice =  exisiting_price - 1219
    // existing_price_tag.innerText = newPrice

})