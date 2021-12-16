// form submit 
    //myForm 的submit click


// get form
// get num1
// get num2
// get option
    // option + 
    // option -
    // option *
    // option /
    // switch case

// 宣告
const form = document.getElementById('myForm') ;
const originPrice = document.getElementById("originPrice");
const discount = document.getElementById("discount");
const cashDiscount = document.getElementById("cashDiscount");
const resultOutput = document.getElementById("resultOutput");
// resultOutput.innerText = "12345";

// input公分.addEventListener("change",function(e){

form.addEventListener("submit",function(e){
    console.log(e);
    // 預防表單重新整理的預設行為
    e.preventDefault();
    console.log(originPrice.value);
    console.log(discount.value);
    console.log(cashDiscount.value);

    //1.1 總價
    centimeter = parseInt(centimeter.value);
    console.log(parseOriginPrice);

    //1.2 折扣
    inchDiscount = parseFloat(inch.value / 100);
    console.log(parseDiscount);

    //1.3 現金折抵
    cashDiscountPrice = parseInt(cashDiscount.value);
    console.log(cashDiscountPrice);    


    // 全部的折扣 = 折扣 + 現金折抵
    let discountAll = 0;
    
    // >500 1.2 79 88 => 0.79 0.88
    if(parseOriginPrice >= 500){
        discountAll = parseOriginPrice * (1- parseDiscount);
    }

    // >200 現金折抵
    if(parseOriginPrice*parseDiscount >= 100){
        discountAll = discountAll + cashDiscountPrice;
    }
    console.log(discountAll);
   
    alert(discountAll);     
    resultOutput.innerText = "Result : 恭喜你今天賺了" + discountAll;
    // switch end


    
});


// get num1
// num1 input ?

// get num2
// get option
    // option + 
    // option -
    // option *
    // option /
