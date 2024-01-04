function gell(){

    var nameList = document.getElementById('name');
var names = nameList.getElementsByTagName('li');
var uk = document.getElementById('search').value.toLowerCase();

for(var i=0 ; i<4;i++){

    if(uk===names[i].textContent.toLowerCase()){

        names[i].style.display='block';

    }
    else if(uk === ''){
        names[i].style.display = 'block';
    }
    else{
        names[i].style.display='none';
    }
}
}
document.getElementById('search').addEventListener('input', gell);

document.getElementById('search').addEventListener('change', gell);