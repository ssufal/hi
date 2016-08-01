var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat-47495_960_720.png') {
      myImage.setAttribute ('src','images/DSC00108.jpg');
    } else {
      myImage.setAttribute ('src','images/cat-47495_960_720.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Is not Cat cute? ' + 'Hello, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Is not Cat cute? ' + 'Hello, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}