// 宣告

// 飲料單價
const coffeeHidden = document.getElementById("coffeeHidden");
const coffeeNum = document.getElementById("coffeeNum");
const teaHidden = document.getElementById("teaHidden");
const teaNum = document.getElementById("teaNum");
const milkHidden = document.getElementById("milkHidden");
const milkNum = document.getElementById("milkNum");
const submitInput = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");


console.log("coffeeHidden",coffeeHidden.value);
console.log("coffeeNum",coffeeNum.value);
console.log("teaHidden",teaHidden.value);
console.log("teaNum",teaNum.value);
console.log("milkHidden",milkHidden.value);
console.log("milkNum",milkNum.value);


// input 的方法 ()
submitInput.addEventListener("click", function (e) {
    // form.addEventListener("submit", function (e) {
    e.preventDefault();
    // confirm("是否要送出表單?");
    if(!confirm("submit ?")){
        return false;
    }
    // console.log("submitInput is click");

    const coffeeHiddenParse = parseInt(coffeeHidden.value);
    const coffeeNumParse = parseInt(coffeeNum.value);
    const teaHiddenParse = parseInt(teaHidden.value);
    const teaNumParse = parseInt(teaNum.value);
    const milkHiddenParse = parseInt(milkHidden.value);
    const milkNumParse = parseInt(milkNum.value);

  // 數字下限防呆
  if (coffeeNum < 0 ||  teaNum < 0 || milkNum < 0) {
    alert ("error！數字小於0");
      return false;
    
      // chineseInput.value = 0;
      // englishInput.value = 0;
      // mathInput.value = 0;
    }



    let sum = coffeeHiddenParse * coffeeNumParse  + teaHiddenParse * teaNumParse + milkHiddenParse * milkNumParse ;
    
    console.log("sum",sum);

    const result =  
    `<div class="alert alert-info" role="alert" id="resultOutput">
    費用合計 : ${sum}
    </div>`;
    resultDiv.innerHTML = result;

});




    //1.2 英吋
    // parseInch = parseFloat(inch.value);
    // console.log(parseInch);

    // console.log(parseCentimeter.value);
    // console.log(parseInch.value);

    // alert(discountAll);     
    // resultOutput.innerText = "Result : 恭喜你今天賺了" + discountAll;
    // switch end




