let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let flex2 = document.getElementById('flex2');
let flex3 = document.getElementById('flex3');


let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


let modal2 = document.getElementById('miModal2');
let cerrar2 = document.getElementById('close2');

let modal3 = document.getElementById('miModal3');
let cerrar3 = document.getElementById('close3');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

abrir2.addEventListener('click', function(){
    modal2.style.display = 'block';
});

abrir3.addEventListener('click', function(){
    modal3.style.display = 'block';
});


cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});
cerrar2.addEventListener('click', function(){
    modal2.style.display = 'none';
});
cerrar3.addEventListener('click', function(){
    modal3.style.display = 'none';
});

window.addEventListener('click', function(e){
    
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

window.addEventListener('click', function(e){
    
    if(e.target == flex2){
        modal2.style.display = 'none';
    }
})

window.addEventListener('click', function(e){
    
    if(e.target == flex3){
        modal3.style.display = 'none';
    }
})

