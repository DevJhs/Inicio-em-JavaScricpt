
//modificando valores
//var salario="1500"
//console.log(salario.replace("1500" , "100"));


//Arrays
//var listas=["Arroz","Feijão", "Morango","Uva","Ovos"]

//push add na lista
//listas.push("Goiaba")

//pop tira o ultimo item da lista
//listas.pop()

// .length mostra o tamanho da Array
//console.log(listas.length);

//.reverse() ira reverte a Array
//console.log(listas.reverse());

//.toString() transfomara tudo em String
//console.log(listas.toString())

//.join() trocara a virgula que separa os items da Array por outra conteudo que você escolher. 
//console.log(listas.join(" /|/ "))

//Objeto

//var pessoa={nome:"João",idade:"15",profissão:"Carpinteiro"}
//console.log(pessoa);


//var pessoa=[{nome:" João ",idade:" 15 ",profissão:" Carpinteiro "},{nome:" Maria ",idade:" 14 ",profissão:" Carpinteira"} ]
//console.log("Profissão: " +pessoa[0].profissão+"Profissão: "+ pessoa[1].profissão);

//Estrutura de Condição

//var idade=prompt("Digite sua Idade:")

/*if(idade>=55){
     console.log("Prioridade");
     
 }else if(idade>=18){
    console.log("Pague a Taxa");
 
 }
 else{
     console.log("Vai para Casa");
   
 }*/

//Estrutura de Repetição

/*var conte=0;

 while(conte<=10){
    console.log(conte);
    conte++
    
 }*/

 /*
 var n=0;
 for(n;n<=20;n++){
     console.log(n);  
    
 }*/

 // Datas

 //var Dt=new Date();
 // .getDate Puxa o Dia 
 //.getFullYear() Puxa o Ano
 //.getHours() Puxa a Hora
 //.getMilliseconds Puxa os Milisegundos
 //.getMinutes Puxa os Minutos

 // console.log(Dt.getDate());
 // console.log(Dt.getFullYear());
 // console.log(Dt.getHours());
// console.log(Dt.getMilliseconds());
//console.log(Dt.getMinutes());

//Funções

/*function soma(n1,n2){
   return n1 + n2
}
console.log(soma(20,30));
*/

/*
function validarIdade(idade){
       if(idade>=18){
          return true
       }else{
          return false;
       };   
};

idade=prompt("Sua Idade:")
console.log(validarIdade(idade));
*/

// funçao botao 
function botao(){
    document.getElementById("agra").innerHTML="aiii doeuuuu!!!";
  // alert("aaiii Doeuuu!!")
}

//funçao redirect
function redi(){
   // abrira em outra pagina
   window.open("https://www.youtube.com/")
   //abrira na mesma pagina
   window.location.href = "https://www.youtube.com/"
}

//funçao quando passar o mouse acontecera um evento
function troca(elemento){
   //document.getElementById("troca").innerHTML="Nao e Nao!!";
   elemento.innerHTML="Nao e Nao!!";
   //alert("assedio")
}
function destroca(elemento){
  // document.getElementById("troca").innerHTML="Ja mandei para !!";
    elemento.innerHTML="Ja mandei para !!";
  // alert("afsss!!")
}

// funçao de Carregamento, quando terminar o carregamento ela ativara
function load(){
   alert("A Pagina Foi Carregada")
}

//
function funcaoChange(elemento){
  console.log(elemento.value);
  
}