// ANIMAÇÃO DA LÂMPADA CONFORME CLIQUE DE COMANDO DO USUÁRIO:

function changeImage(){
    let image = document.getElementById("myImage");

    if(image.src.match("desligada")){
        
        image.src = "ligada.png";
    }else{
        image.src = "desligada.png";
        contador
    }
    if(contador == 4){
        image.src = "quebrada.png";
    }

}