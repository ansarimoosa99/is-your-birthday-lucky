const birthDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
checkNumberButton.addEventListener('click', checkLuckyNumber)
const output = document.querySelector("#output-area");


function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}


function compareLuckyNumber(sum, luckyNo) {
  if (sum % luckyNo === 0) {
    output.innerText = "YAY, It's your lucky No :)"
  }
  else {
    output.innerText = "Ayy, Not so lucky :("

  }
}

function checkLuckyNumber() {
  const dob = birthDate.value;
  const luckyNo = luckyNumber.value;
  var sum = calculateSum(dob);
  //console.log(sum);
  if (sum && luckyNo) {
    compareLuckyNumber(sum, luckyNo);
  }

}