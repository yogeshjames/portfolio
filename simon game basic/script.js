
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

document.querySelector("#red").addEventListener('click', function(){
    var d= document.querySelector("#red");
    d.classList.add("pressed");
    setTimeout(function(){
        d.classList.remove("pressed");},50)
        
        g.push('r');
        var v=equal(f,g);
        
       setTimeout(bot,200);

});

document.querySelector("#green").addEventListener('click', function(){
    var d= document.querySelector("#green");
    d.classList.add("pressed");
    setTimeout(function(){
        d.classList.remove("pressed");},50)
        g.push('g');
        
        var v =equal(f,g);
       
       setTimeout(bot,200);

});

document.querySelector("#blue").addEventListener('click', function(){
    var d= document.querySelector("#blue");
    d.classList.add("pressed");
    setTimeout(function(){
        d.classList.remove("pressed");},50)
        g.push('b');
        
        var v =equal(f,g);
      
      setTimeout(bot,200);

});
document.querySelector("#yellow").addEventListener('click', function(){
    var d= document.querySelector("#yellow");
    d.classList.add("pressed");
    setTimeout(function(){
        d.classList.remove("pressed");},50)
        g.push('y');
        
        var v =equal(f,g);
       
       setTimeout(bot,200);

});



document.addEventListener('keydown', function(){bot()});

document.addEventListener('click', function(){
    x= Date.now();
});

function time(){

    var y= Date.now();
    if(y-x>2000 && x!=0){
        document.querySelector("body").classList.add("game-over");
            document.querySelector("h1").innerHTML='Too much Time';
            setTimeout(function(){
             document.querySelector("body").classList.remove("game-over");},600);
    }

   setTimeout(time,1000);
}

time();