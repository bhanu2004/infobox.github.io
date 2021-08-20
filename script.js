const mode = document.getElementById('mode');
const cont = document.getElementById('cont');
const box = document.getElementById('box');
const par = document.getElementById('para')
mode.addEventListener('click', function(){
    if(mode.innerHTML == '<i class="far fa-sun" aria-hidden="true"></i>'){
        mode.innerHTML = '<i class="far fa-moon"></i>'
        cont.style.background = 'rgb(232, 241, 247)' 
        box.style.background = 'white'
        par.style.color = 'rgb(97, 101, 104)'
    }
    else{
        mode.innerHTML = '<i class="far fa-sun"></i>'
        cont.style.background = 'black' 
        box.style.background = 'rgb(70, 65, 65)'
        par.style.color = 'rgb(169, 177, 184)'
    }
   
})