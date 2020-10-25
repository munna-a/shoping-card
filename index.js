document.querySelector("#productPlus").addEventListener("click", function(){
    //findout display value;
    const displayValue = document.querySelector("#display").value;
    const displayValueConvert = parseFloat(displayValue);
 
    //display value ++
    const displayValueChange = displayValueConvert + 1;
    document.querySelector("#display").value = displayValueChange;
    

    const result = displayValueConvert * 1219 + 1219; //product plus contatity 
    document.querySelector("#productAmount").innerText = result; //show total product taka 
    document.querySelector("#productMinus").disabled = false;  //Clicking plus button enable minus button 
    subTotalTaka() //subtotal taka plus function
    addVat() //vat add function
    TotalTaka() //total taka function
})


//The same works have been done repeatedly without informing the proper use of Function


document.querySelector("#productMinus").addEventListener("click", function(){
    const difindValue = document.querySelector("#display").value;
    const minusProduct = difindValue -1;
    document.querySelector("#display").value = minusProduct;
    const finalResult = difindValue * 1219 -1219;
    document.querySelector("#productAmount").innerText = finalResult;
    if(difindValue <= 1){
        document.querySelector("#productMinus").disabled = true;
    }
    minusSubtotalTaka()
    minusVat()
    minusTotalTaka()
})
 


//second item



document.querySelector("#productPlus2").addEventListener("click", function(){
    //findout display value;
    const displayValue2 = document.querySelector("#display2").value;
    const displayValueConvert2 = parseFloat(displayValue2);

    const displayValueChange2 = displayValueConvert2 + 1;
    document.querySelector("#display2").value = displayValueChange2;

    const result = displayValueConvert2 * 59 + 59;
    document.querySelector("#productAmount2").innerText = result;
    document.querySelector("#productMinus2").disabled = false;
    subTotalTaka()
    addVat()
    TotalTaka()
})

document.querySelector("#productMinus2").addEventListener("click", function(){
    const difindValue2 = document.querySelector("#display2").value;
    const minusProduct2 = difindValue2 -1;
    document.querySelector("#display2").value = minusProduct2;
    const finalResult2 = difindValue2 * 59 -59;
    document.querySelector("#productAmount2").innerText = finalResult2;
    if(difindValue2 <= 1){
        document.querySelector("#productMinus2").disabled = true;
    }
    minusSubtotalTaka()
    minusVat()
    minusTotalTaka()
})

//plus minus function area 

function subTotalTaka(){
    var firstProductValue = document.querySelector("#productAmount").innerText;
    var convertFirstVale = parseFloat(firstProductValue);

    var secondProductValue = document.querySelector("#productAmount2").innerText;
    var convertSecondVale = parseFloat(secondProductValue);

    var totalAmount = convertFirstVale + convertSecondVale;
    document.querySelector("#result").innerText = totalAmount;
    return totalAmount;
}

function minusSubtotalTaka(){
    var firstProductValue = document.querySelector("#productAmount").innerText;
    var convertFirstVale = parseFloat(firstProductValue);

    var secondProductValue = document.querySelector("#productAmount2").innerText;
    var convertSecondVale = parseFloat(secondProductValue);

    var totalAmount = convertFirstVale - convertSecondVale;
    document.querySelector("#result").innerText = totalAmount;
    return totalAmount;
}

function addVat(){
    var firstProductValue = document.querySelector("#productAmount").innerText;
    var convertFirstVale = parseFloat(firstProductValue);

    var secondProductValue = document.querySelector("#productAmount2").innerText;
    var convertSecondVale = parseFloat(secondProductValue);

    var totalAmount = convertFirstVale + convertSecondVale;
    var totalVat = totalAmount /100 *7.20;
    var convertVat = parseInt(totalVat)
    document.querySelector("#vat").innerText = convertVat;
    return convertVat;
}

function minusVat(){
    var firstProductValue = document.querySelector("#productAmount").innerText;
    var convertFirstVale = parseFloat(firstProductValue);

    var secondProductValue = document.querySelector("#productAmount2").innerText;
    var convertSecondVale = parseFloat(secondProductValue);

    var totalAmount = convertFirstVale - convertSecondVale;
    var totalVat = totalAmount /100 *7.20;
    var convertVat = parseInt(totalVat)
    document.querySelector("#vat").innerText = convertVat;
    return convertVat;
}


function TotalTaka(){
    var totalTaka = document.querySelector("#result").innerText;
    var convertTotalTaka = parseFloat(totalTaka);
    
    var vat = document.querySelector("#vat").innerText;
    var convertVattaka = parseFloat(vat);

    var intotalAmount = convertTotalTaka + convertVattaka;

    document.querySelector("#finalResult").innerText = intotalAmount;

    return intotalAmount;
}

function minusTotalTaka(){
    var totalTaka = document.querySelector("#result").innerText;
    var convertTotalTaka = parseFloat(totalTaka);
    
    var vat = document.querySelector("#vat").innerText;
    var convertVattaka = parseFloat(vat);

    var intotalAmount = convertTotalTaka - convertVattaka;

    document.querySelector("#finalResult").innerText = intotalAmount;

    return intotalAmount;
}


document.querySelector("#submit").addEventListener("click", function(){
    alert("Its testing purpose");
})