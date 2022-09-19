let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/riluo.png') {
      myImage.setAttribute('src', 'images/riluo2.png');
    } else {
      myImage.setAttribute('src', 'images/riluo.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '很高兴认识你，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好呀，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
 
   

    