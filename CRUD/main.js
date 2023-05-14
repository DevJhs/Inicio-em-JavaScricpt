'use strict'
    
const openModal = () => document.getElementById('modal')
    .classList.add('active')

 const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

//cliente temporario
const tempClient={//objeto de cliente temporario
     nome:"sergio",
     email:"sergio123@gmail.com",
     celular:"4578648616",
     cidade:"Sao paulo"
};
const getLocalStorage= () =>{
    JSON.parce(localStorage.getItem('db_Client'))
    db_Client.push(client) ??[] // o getItem ira ler o db_Client, ou seja ele ira ler a base de dados e logo depois,ira salvar os dados no LOcalStorage, formando assim uma cadeia de daods em sequencia, sem ssobreescrever.
};

 const localStorage= (db_Client) =>localStorage.setItem('db_Client', JSON.stringify('db_Client'));



//CRUD - Create read update delete
//CRUD - read
const createClient = (client) =>{
    const db_Client= getLocalStorage
    db_Client.push(client);
    setlocalStorage(db_Client);
   // setItem (escrita) | getItem (escuta ou leitura)

} 

 //eventos   
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)




