/*
let banana = 1;
let pera = 1;
let abacaxi = 2;
/*

if(pera == banana && abacaxi == 2){
    console.log("verdadeiro");
}else{
    console.log("falso");
}

let manhã = 1;
let tarde = 2;
let noite = 1;
 
if(manhã == 1 && noite == 1){ console.log("É hora da aula Full Stack");

}else{
    console.log("Não é hora da aula Full Stack");
}

let boleano = false
if(boleano || pera == 3){
    console.log("verdadeiro");
}else{
    console.log("falso");
}


let boleano = false
if(boleano || pera == 3){
    if (pitanga == uva){
        console.log("2x-verdadeiro");  
    }else{
        console.log("1x-verdadeiro");  
    }
    
}else{
    if (!boleano || (abacaxi * 3) == pitanga) {
        console.log("1x-falso");
    } else {
        console.log("2x-falso");
    }
    }
*/
//condições para evitar exposição dos dados do cliente ao realizar/tentar login

let email_banco ="8talita32@gmail.com";
let senha_banco = "senhaforte";

let email_usuario= prompt("8talita32@gmail.com");
let senha_usuario=prompt("senhaforte");
let email_admin = "senhaforte";
let logado = false;

if((email_usuario == email_banco || email_usuario == email_admin) 
&& senha_usuario == senha_banco){
    logado = true;
    console.log("Logado com sucesso");
    if(email_usuario == email_admin){
        console.log("Bem vindo admin");
    }
}else{
    logado = false;
    console.log("login inválido");






}
/*
let contador = 0;
while(contador <=10){
    if(contador % contador == 0 && contador % 1 == 0){
        console.log(contador +" é primo");
    }else{
        console.log("não é primo");
        contador++;
    }console.log(index);
}
*/

let num = prompt();

for(let index = 0; index <= 10; index++){
    console.log(parseInt(num) +" x "+ index + " = " + (parseInt(num) * index));
}

//Aprendendo funções:



/*
function calculadora(){
   let operacao = prompt("Escreva o nome da operação");
   if(operacao == "soma"){
    let primeirovalor = prompt(" primeiro valor");
    let segundovalor = prompt("segundo valor");
    soma(primeirovalor,segundovalor);
    console.log(soma(parseInt(primeirovalor),parseInt(segundovalor)));
   }

}

calculadora()


function soma(x,y){
    return x+y;
}
console.log(soma(2,5));

function subtracao(x,y){
    return x-y;
}
console.log(subtracao(2,5));

function multiplicacao(x,y){
    return x*y;
}
console.log(multiplicacao(2,5));

function divisao(x,y){
    return x/y;
}
console.log(divisao(2,5));
*/