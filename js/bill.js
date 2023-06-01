window.addEventListener('load', function(){
    let sub = document.getElementById('sub-total');
    let subtotal = parseInt(sub.innerText);
    console.log(subtotal);

    let taxTemp = document.getElementById('tax');
    let taxWtihSub = subtotal + (subtotal * 0.20);
    let taxAmount = Math.ceil(taxWtihSub - subtotal);
    taxTemp.innerText = taxAmount;
})

function calcTotal() {

    //case price
    let casePrice = document.getElementById('price-case'); 
    let caseTotal = parseInt(casePrice.innerText);

    //phone price
    let phonePrice = document.getElementById('price-phone');
    let phoneTotal = parseInt(phonePrice.innerText);

    // subtotal
    let subtotal = phoneTotal + caseTotal;

    let sub = document.getElementById('sub-total');
    sub.innerText = subtotal;

    // Tax
    let taxTemp = document.getElementById('tax');
    let taxWtihSub = subtotal + (subtotal * 0.20);
    let taxAmount = Math.ceil(taxWtihSub - subtotal);

    taxTemp.innerText = taxAmount;

    // Total
    let total = subtotal + taxAmount;
    let totalPrice = document.getElementById('total');

    totalPrice.innerText = total;
}




