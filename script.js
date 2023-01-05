// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector("#username");
let elFailuredMessage = document.querySelector('.failure-message');
let elSuccessMeassage = document.querySelector('.success-message');

const pwd1 = document.querySelector('#password');
const pwd2 = document.querySelector('#password-retype')

const mismatch = document.querySelector('.mismatch-message')

const signup = document.querySelector('.signup');
const main1 = document.querySelector('#main1');


// css를 직접적으로 바꿈 
/* elFailuredMessage.style.display = 'block'; */

// 현업에서 자주 쓰는 방법
// elFailuredMessage.classList.remove('hide');

signup.onclick = function() {
  main1.classList.add('greeting')
}


elInputUsername.onkeyup = function() {

  if(isMoreThan4Length(elInputUsername.value)) {
    elSuccessMeassage.classList.remove('hide');
    elFailuredMessage.classList.add('hide');
  } else {
    elSuccessMeassage.classList.add('hide');
    elFailuredMessage.classList.remove('hide');
  }
}

pwd2.onkeyup = function() {
  if(isMatch(pwd1.value, pwd2.value)) {
    mismatch.classList.add('hide');
  } else {
    mismatch.classList.remove('hide');
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}
