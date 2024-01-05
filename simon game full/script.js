
var f=[];
var x;
var g=[];
function bot(){
    var b =Math.floor(Math.random() * 4);
    switch (b){

        case 0:
           var c= document.querySelector("#yellow");
           c.classList.add("pressed");
           setTimeout(function(){c.classList.remove("pressed");}
            ,50)
            f.push('y');
           
            break;
           
        case 1:
            var c= document.querySelector("#green");
            c.classList.add("pressed");
            setTimeout(function(){
                c.classList.remove("pressed");},50)
                f.push('g');
                
            break;
    
        case 2:
            var d= document.querySelector("#red");
            d.classList.add("pressed");
            setTimeout(function(){
                d.classList.remove("pressed");},50)
                f.push('r');
                
            break;
    
        case 3:
            var d= document.querySelector("#blue");
            d.classList.add("pressed");
            setTimeout(function(){
                d.classList.remove("pressed");},50)
                f.push('b');
                
            break;
    }

    
}

function equal(x,y){

    var h=0;
    for(var i=0; i<x.length; i++){
        
        if(x[i]==y[i]){
            h=1;
        }
        else{
            document.querySelector("body").classList.add("game-over");
            document.querySelector("h1").innerHTML='Refresh to Restart';
            setTimeout(function(){
                document.querySelector("body").classList.remove("game-over");},600);

            h=0;
        }
    }
    
    
return h; 
}
var no = 0;
function clickHandler(color) {
    
    var d = document.querySelector("#" + color);
    d.classList.add("pressed");
    setTimeout(function(){
    d.classList.remove("pressed");},50)
    var maxClicks = f.length
    no++;
   //alert(no)
    
    if (no == maxClicks) {
        var n= equal(f,g);
        no=0;
        if(n==1){
             g.length=0;
             //alert(g);
             setTimeout(bot,500);
        }
    }
}

document.querySelector("#red").addEventListener('click', function() {
    g.push('r');
    clickHandler("red");
    
});

document.querySelector("#green").addEventListener('click', function() {
    g.push('g');
    clickHandler("green");
    
});

document.querySelector("#yellow").addEventListener('click', function() {
    g.push('y');
    clickHandler("yellow");
    
});

document.querySelector("#blue").addEventListener('click', function() {
    g.push('b');
    clickHandler("blue");
    
});

document.addEventListener('click', function(){
    x= Date.now();
});

function time(){

    var y= Date.now();
    if(y-x>3000 && x!=0){
        document.querySelector("body").classList.add("game-over");
            document.querySelector("h1").innerHTML='Too much Time';
            setTimeout(function(){
             document.querySelector("body").classList.remove("game-over");},500);
    }

   setTimeout(time,2000);
}
document.querySelector("#Button").addEventListener('click',bot)

time();