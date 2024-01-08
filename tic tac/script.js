var x=0;
var y=0;
for (var i = 0; i < 9; i++) {
    (function(index) {
        document.querySelectorAll(".button-option")[index].addEventListener("click", function() {
           x+=1;
           if(y==0){
               document.querySelectorAll(".button-option")[index].innerText = "x";
           y=1;}
           else{
            document.querySelectorAll(".button-option")[index].innerText = "o";
            y=0;
           }
           if(x>3){
            cond();
         }
         
        });
    })(i);
}



var arr = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function cond(){
    for(var i=0;i<9;i++){
        var b=arr[i][0];
        var c=arr[i][1];
        var d=arr[i][2];
        var n = document.querySelectorAll(".button-option")[b].innerText;
        var f = document.querySelectorAll(".button-option")[c].innerText;
        var w = document.querySelectorAll(".button-option")[d].innerText;
        if (n=="x"&& f=="x"&& w=="x"){
            document.getElementById("restart").innerText="Player 1 wins/";
            
            setTimeout(function() {
                location.reload();
              }, 1000);
              break;
        }
        else if (n=="o"&& f=="o"&& w=="o") {
            document.getElementById("restart").innerText="Player 2 wins/";
            
            setTimeout(function() {
                location.reload();
              }, 1000);
              break;
        }
        else{
           if(x>8){
            document.getElementById("restart").innerText="Draw/";
            setTimeout(function() { 
                location.reload();
              }, 1000);
            break;
           }
        }
    }
  }