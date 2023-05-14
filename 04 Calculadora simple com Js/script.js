function inserir(numero){

    document.getElementById("tela").innerHTML+=numero;
 
};
function limpar(){

    document.getElementById("tela").innerHTML="";

};
function apagar(){
    var tela=document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML=tela.substring(0, tela.length -1);

};
function calcular(){
    var tela=document.getElementById("tela").innerHTML;
    if(tela){
        document.getElementById("tela").innerHTML=eval(tela);

    }
    else{
        document.getElementById("tela").innerHTML="que Que EuCalcule?";

    }
};