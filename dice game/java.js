
function roll(){
    var a = Math.floor(Math.random() * 6);
var b =Math.floor(Math.random() * 6);

if (a>b){
    document.querySelector("body > div.container > h1").innerHTML="Player A wins";
}
else if(a==b){
    document.querySelector("body > div.container > h1").innerHTML="Draw,Roll Again";
}
else {
    document.querySelector("body > div.container > h1").innerHTML="Player B wins";
}

switch(b) {
  case 1:
    document.querySelector("body > div.container > div:nth-child(3) > img").src="images/dice1.png";
    break;
  case 2:
    document.querySelector("body > div.container > div:nth-child(3) > img").src="images/dice2.png";
    break;
  case 3:
    document.querySelector("body > div.container > div:nth-child(3) > img").src="images/dice3.png";
    break;
  case 4:
        document.querySelector("body > div.container > div:nth-child(3) > img").src="images/dice4.png";
        break;
  case 5:
        document.querySelector("body > div.container > div:nth-child(3) > img").src="images/dice5.png";
        break;
  case 6:
        document.querySelector("body > div.container > div:nth-child(3) > img")="images/dice6.png";
        break;
}



switch(a) {
    case 1:
      document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice1.png";
      break;
    case 2:
      document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice2.png";
      break;
    case 3:
      document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice3.png";
      break;
    case 4:
          document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice4.png";
          break;
    case 5:
          document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice5.png";
          break;
    case 6:
          document.querySelector("body > div.container > div:nth-child(2) > img").src="images/dice6.png";
          break;
  }

  
}

