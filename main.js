var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'boxes.jpg') {
      myImage.setAttribute ('src','paris.jpg');
    } else {
      myImage.setAttribute ('src','boxes.jpg');
    }
}

  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');

  function setUserName() {
    var myName = prompt('Please enter your name.');
    sessionStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

  if(!sessionStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = sessionStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }