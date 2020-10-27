//Variables

const listaTweets = document.querySelector('#lista-tweets');




//Event listener

eventListeners();


function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);


    //Seleccionar lista tweets para Delegation 
    listaTweets.addEventListener('click', borrarTweet);
    
}



//Funciones
function agregarTweet(e){
    e.preventDefault();
    //Leer la textarea
    const tweet = document.querySelector('#tweet').value;


    //Añadir boton borrar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //crear el elemento y añadirle contenido a la lista
    const li = document.createElement('li');
    //agrega el texto del tweet
    li.textContent = tweet;
    //añade el boton borrar a la lista
    li.appendChild(botonBorrar);
    //añade el tweet  a la lista
    listaTweets.appendChild(li);

    //Agregar a local storage
    agregarTweetLocalStorage(tweet);
}

//Borrar tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){

        console.log(e.target.parentElement.remove());
        alert("teweet eliminado");
    }
    
}

//Agrega tweet a local storage

function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetLocalStorage();
    //Agregar a local storage
    tweets.push(tweet);

    //Convertir el string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

  
}

function obtenerTweetLocalStorage(){
    let tweets;
    //Revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];

    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}