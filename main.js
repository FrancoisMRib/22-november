//ORIGINAL + BONUS 1
/*
let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9" ;
const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                        const temperature = (json.main.temp)-273.15 ;
                        const nomVille = json.name ;
                        const latitude = json.coord.lat ;
                        const longitude = json.coord.lon ;
                    const para1 = document.createElement('p');
                    document.body.appendChild(para1);
                    para1.textContent = nomVille ;
                    const para2 = document.createElement('p');
                    document.body.appendChild(para2);
                    para2.textContent = "Température : "+temperature.toFixed(2)+ " °C" ;
                    const para3 = document.createElement('p');
                    document.body.appendChild(para3);
                    para3.textContent = "Coordonnées : "+latitude+" en lat. et "+longitude+" en long." ;

                    });
                    */


/*
Depuis la base de code ci-dessus récupérer :
température (main),
nom de la ville (name),
lat et long (coord)
Stocker ces valeurs dans des variables.
Dans page HTML vous allez ajouter des paragraphes,
injecter ces valeurs dans les paragraphes.
NB : utiliser les méthodes (createElement, appendChild, textContent).
Bonus : convertir la température en degrés celcius
*/

//BONUS 2
//Bonus 2 : Afficher à la place de la valeur du temps qu'il fait (weather.main) l'image correspondante (dans une balise image).
//Le nom de l'image est dans wheater.icon
let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9" ;
const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                        const temperature = (json.main.temp)-273.15 ;
                        const nomVille = json.name ;
                        const latitude = json.coord.lat ;
                        const longitude = json.coord.lon ;
                        //const illustrat = json.weather.main ;
                const ptitimage = document.createElement('img');
                ptitimage.setAttribute('src', "https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png") ;
                document.body.appendChild(ptitimage);

                    const para1 = document.createElement('p');
                    document.body.appendChild(para1);
                    para1.textContent = nomVille ;
                    
                    const para2 = document.createElement('p');
                    document.body.appendChild(para2);
                    para2.textContent = "Température : "+temperature.toFixed(2)+ " °C" ;
                    const para3 = document.createElement('p');
                    document.body.appendChild(para3);
                    para3.textContent = "Coordonnées : "+latitude+" en lat. et "+longitude+" en long." ;
                    
                
                    });

