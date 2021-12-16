// 宣告
// const chineseInput = document~~就是html第一行的d什麼的~~ .~~抓這個文件裡的id~~getElementById("chinese");
//BOM 核心WINDOW物件  DOM-HTML
const chineseInput = document.getElementById("chinese");
const englishInput = document.getElementById("english");
const mathInput = document.getElementById("math");
const submitInput = document.getElementById("submitBtn");
const form = document.getElementById("myForm");
const resetBtnButton = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");

console.log(window);
console.log("chineseInput的資料型態是");
console.log(typeof chineseInput);

resetBtnButton.addEventListener("click", function (e) {
  // console.log('btn2Button click');
  chineseInput.value = 60;
  englishInput.value = 60;
  mathInput.value = 60;
  resultDiv.innerText = "";
  
});

//element.addEventListener(event, function, useCapture)     點擊動作
//用change user會生氣，因為填的資料一直被清掉，所以用submit比較好
// input 的方法 ()
submitInput.addEventListener("click", function (e) {
  // 讓表單不要重新整理
  e.preventDefault();
  //如果html沒有id命名這邊就會報錯 console.log("submitInput is click");
  // confirm("是否要送出表單?"); 驚嘆號confirm 是否要送出呢
if(!confirm("submit ?你要送出表單嗎")){
  return false;
}
  //這段要在防呆前，因為這樣防呆需要的資料才能抓出來
  const chinese = parseInt(chineseInput.value);
  const english = parseInt(englishInput.value);
  const math = parseInt(mathInput.value);

  // 數字上線防呆
  if (chinese > 100 || english > 100 || math > 100) {
  alert ("error！數字超過100");
    return false;
  
    // chineseInput.value = 0;
    // englishInput.value = 0;
    // mathInput.value = 0;
  }

  let sum = chinese + english + math;
  //   console.log(typeof(sum)); //看資料型態
  //   console.log("sum is" + sum); //同一行省空間 但只會看出來是string
  //   console.log("總分" + sum); //同一行 可以看出型態
  //   console.log("sum is");
  //   console.log(sum);

  //   let avg = sum / 3;   這個公式會出現小數點
  let avg = Math.round((sum / 3) * 100) / 100;
  console.log("avg平均", avg);

  //level
  let level;
  let color = "secondary";
  if (avg >= 90) {
    level = "A";
    color = "success";
  } else if (avg >= 80) {
    level = "B";
    // color = "info";
  } else if (avg >= 70) {
    level = "C";
    // color = "primary";
  } else if (avg >= 60) {
    level = "D";
    // color = "";
  } else {
    level = "E";
    color = "danger";
  }

  console.log("level", level);
  console.log("color", color);

  const result = `<div class="alert alert-${color}" role="alert" id="resultOutput">
  國文 : ${chinese} <br>
  英文 : ${english} <br>
  數學 : ${math} <br>
  總分 : ${sum} <br>
  平均 : ${avg} <br>                 
  成績判定 : ${level}   
</div>`;

  resultDiv.innerHTML = result;
});

// 1英寸=2.54公分

// inchInput.addEventListener("change", function (e) {
//   // console.log("centimeter is change")
//   // 1.1公分
//   const inch = parseFloat(inchInput.value);
//   console.log(inch);
//   cm = inch * 2.54;
//   cm = Math.round(cm * 100) / 100;
//   console.log(cm);
//   //下面如果打成inchInput.value = inch;就會一直改英吋自己的數字
//   cmInput.value = cm;
//   console.log(55688);
//   if (isNaN(inch)) {
//     inchErr.innerText = "請輸入數字";
//   }
// });
