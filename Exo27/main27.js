/*
Partie HTML :
Créer une page HTML avec les éléments suivants :
-Un paragraphe (id=nom),
-Un paragraphe (id=temps),
-Un paragraphe (id=temperature)
-Ajouter un input text (id=ville),
-Ajouter un bouton (id=bt)

Partie JS :
-en utilisant le code ci-dessus :
-Récupérer les 3 paragraphes HTML,
-Passer un nom de ville valide  (à la place de ville dans la variable ville)
-Récupérer depuis le json les données suivantes :
      name(nom de ville),
      main.temp (météo en degrés Kelvin),
      weather.main (le temps qu'il fait)
-Afficher dans la page dans les paragraphes les données correspondantes.
-Convertir la température en degrés Celcius.
-Ajouter un écouteur d'événement click  sur le bouton qui va :
-Récupérer la valeur de l'input et la passer dans l'url (à la place de ville),
-Exécuter le code de partie non Bonus (mais avec la ville saisie dans l'input)
-Gérer si le code est 404 (reponse.status == 404) et afficher dans la page la ville n'existe pas
*/
//Variable définie à l'extérieur car utile plus tard
let nomDeVille = document.getElementById('ville').value;

let url = "https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9" ;
const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);

                        const p1 = document.querySelector('div > p');
                        const p2 = document.querySelector('div > p+p');
                        const p3 = document.querySelector('div > p+p+p');

                //bt.addEventListener('click', ()=>
                        //if (url = "https://api.openweathermap.org/data/2.5/weather?q="+nomDeVille+"&appid=6f88826d767f323ad19cd282444924e9") {
                            
                        //} ;
                //)
            })
const bt = document.getElementById('bt');
//récupération des trois paragraphes
const p1 = document.querySelector('#nom');
const p2 = document.querySelector('#temperature');
//const p3 = document.querySelector('div > p+p+p');
const image = document.querySelector('#temps')
//ajouter un écouteur sur le bouton
bt.addEventListener('click', ()=>{
    //récupérer la valeur saisie dans l'input (ville)
    const ville = document.querySelector('#ville').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=6f88826d767f323ad19cd282444924e9`;
    //appel de api
    fetch(url)
    .then(async response =>{
        //test si le code status == 404
        if(response.status === 404) {
            p1.textContent = "La ville n'existe pas";
            image.src = "" ;
            p2.textContent = "" ;
        }
        //afficher la météo de la ville
        if(response.status===200) {
            //récupérer le json
            const json = await response.json();
            //récupérer les valeurs (nom de la ville, temps qu'il fait, temperature)
            const nom = json.name;
            const temps = json.weather[0].icon;
            const temperature = json.main.temp ;
            //assigner aux éléments HTML
            p1.textContent = nom;
            image.src = temps;
            p2.textContent = (temperature-273.15).toFixed(2);
        }
    })
        
})

