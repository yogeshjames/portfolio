
var x=0;

function erase(x){
    document.querySelector(`body > div.container > div.${x}.black-hole > img`).style.display="none";
}
function score(){

    x=x+1;
    document.querySelector(" h1 > div.y").textContent = "score:"+ x;
}

for (let i = 1; i <= 6; i++) {
    let className = 'b' + i;
    let elements = document.querySelectorAll('body > div.container > div.' + className + '.black-hole > img');
    
    
    elements.forEach(element => {
      element.addEventListener('click', function() {
       erase(element.className);
       score();
      
      });
    });
  }
  


function mole() {
var a = Math.floor(Math.random() * 7);

switch(a){
    
    case 1:
        document.querySelector("body > div.container > div.b1.black-hole > img").style.display="block"
          setInterval(() => erase("b1"),3000);
                               break;

    case 2:
          document.querySelector("body > div.container > div.b2.black-hole > img").style.display="block";
          setInterval(() => erase("b2"),3000);
                                break;

    case 3:
                document.querySelector("body > div.container > div.b3.black-hole > img").style.display="block";
                setInterval(() => erase("b3"),3000);
                
                               break;

     case 4:
                    document.querySelector("body > div.container > div.b4.black-hole > img").style.display="block";
                    setInterval(() => erase("b4"),3000);
                       break;

    case 5:
        document.querySelector("body > div.container > div.b5.black-hole > img").style.display="block";
        setInterval(() => erase("b5"),3000);
                                 break;

    case 6:
            document.querySelector("body > div.container > div.b6.black-hole > img").style.display="block";
            setInterval(() => erase("b6"),3000);
            break;
        }

 }


setInterval(function () { mole();
}
,3200);