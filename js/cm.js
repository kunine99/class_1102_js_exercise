// form submit
//myForm 的submit click

// 宣告
const cmInput = document.getElementById("centimeter");
const inchInput = document.getElementById("inch");

const m2Input = document.getElementById("m2");
const pingInput = document.getElementById("ping");

const cmErr = document.getElementById("cmErr");
const inchErr = document.getElementById("inchErr");
const m2Err = document.getElementById("m2Err");
const pingErr = document.getElementById("pingErr");

//element.addEventListener(event, function, useCapture)     點擊動作
cmInput.addEventListener("change", function (e) {
  // console.log("centimeter is change")
  // 1.1公分
  const cm = parseFloat(cmInput.value);
  console.log(cm);
  let inch = cm / 2.54;
  console.log(inch);
  inch = Math.round(inch * 100) / 100;
  console.log(inch);
  inchInput.value = inch;
  console.log(55688);
  if (isNaN(cm)) {
    cmErr.innerText = "請輸入數字";
  }
});

// 1英寸=2.54公分

inchInput.addEventListener("change", function (e) {
  // console.log("centimeter is change")
  // 1.1公分
  const inch = parseFloat(inchInput.value);
  console.log(inch);
  cm = inch * 2.54;
  cm = Math.round(cm * 100) / 100;
  console.log(cm);
  //下面如果打成inchInput.value = inch;就會一直改英吋自己的數字
  cmInput.value = cm;
  console.log(55688);
  if (isNaN(inch)) {
    inchErr.innerText = "請輸入數字";
  }
});

/////////////////////////////////////////下面是平方公尺換算

m2Input.addEventListener("change", function (e) {
  // console.log("m2 is change")
  //1.3 平方公尺
  const m2 = parseFloat(m2Input.value);
  // console.log(m2);
  let ping = m2 / 3.306;
  // console.log(ping);
  ping = Math.round(ping * 100) / 100;
  // console.log(ping);
  // 下面那行的意思是轉換把m2轉換成ping
  pingInput.value = ping;
  // console.log(55688);
  if (isNaN(m2)) {
    m2Err.innerText = "請輸入數字";
  }
});

// 1英寸=2.54公分

// pingInput.addEventListener("change", function (e) {
//   // console.log("ping is change")
//   //1.2 英吋
//   const ping = parseFloat(pingInput.value);
//   console.log(ping);
//   m2 = ping * 3.306;
//   m2 = Math.round(m2 * 100) / 100;
//   console.log(m2);
//   m2Input.value = m2;
//   console.log(55688);
// });

pingInput.addEventListener("change", function (e) {
  const ping = parseFloat(pingInput.value);
  m2 = ping * 3.306;
  m2 = Math.round(m2 * 100) / 100;
  m2Input.value = m2;
  if (isNaN(ping)) {
    pingErr.innerText = "請輸入數字";
  }
});
