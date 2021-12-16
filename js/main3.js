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
//const num1 = document.getElementById("這邊輸入的字會連到html");
const form = document.getElementById('myForm') ;
const originPrice = document.getElementById("originPrice");
const discount = document.getElementById("discount");
const cashDiscount = document.getElementById("cashDiscount");
const resultOutput = document.getElementById("resultOutput");
// resultOutput.innerText = "12345";

//get form
//element.addEventListener(event, function, useCapture)     點擊動作 
form.addEventListener("submit",function(e){
console.log(e);

    // 預防表單重新整理的預設行為
    e.preventDefault();
    console.log(originPrice.value);
    console.log(discount.value);
    console.log(cashDiscount.value);

    //parseInt 獲取某個字符串的原始數據類型
    //1.1總價
    parseOriginPrice = parseInt(originPrice.value);
    console.log(parseOriginPrice);
    
    //1.2折扣
    //public static float parseFloat(String s)
    parseDiscount = parseFloat(discount.value / 100);
    console.log(parseDiscount);

    //1.3現金折抵
    //parseInt(string, radix); 函式能將輸入的字串轉成整數
    cashDiscountPrice = parseInt(cashDiscount.value);
    console.log(cashDiscountPrice);
    
    //全部的折扣 = 折扣 + 現金折抵
    let discountAll = 0;

    // 原價>500為 1.2 折扣79折 88折 =>0.79 0.88
    if(parseOriginPrice >= 500){
        discountAll = parseOriginPrice * (1- parseDiscount);
    }

    // 原價>200為  現金折抵
    if(parseOriginPrice*parseDiscount >= 100){
        discountAll = discountAll + cashDiscountPrice;
    }
    console.log(discountAll);

    alert(discountAll);
    resultOutput.innerText = "Result :恭喜你今天省了" + discountAll;
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
