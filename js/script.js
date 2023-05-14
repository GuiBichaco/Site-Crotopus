// alert("Olá como você está? \n Seja BEM-VINDO(A)")

/*Criando um array de images*/

var images=[
    'img/baixados.jpeg',
    'img/OIP (1).jpeg',
    'img/OIP (2).jpeg',
    'img/OIP (3).jpeg',
    'img/OIP (4).jpeg',
    'img/OIP.jpeg',
];

/*declarando variaveis*/

let index = 0; /*Posição*/
let time = 2000;/*tempo*/

/*Criando uma função*/

function slideshow(){
    /*Pega o ID e o caminho da imagem*/
    document.getElementById('image').src=images[index]
    index++; /*Incremento*/
    if(index ==images.length){index=0}
    setTimeout("slideshow()",time);
}

slideshow();



window.addEventListener('scroll', reveal);

function reveal (){
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}