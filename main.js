let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9" ;
const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                        const temperature = json.main.temp ;
                        const nomVille = json.name ;
                        const latitude = json.coord.lat ;
                        const longitude = json.coord.lon ;
                    const para1 = document.createElement('p');
                    document.body.appendChild(para1);
                    para1.textContent = nomVille ;
                    const para2 = document.createElement('p');
                    document.body.appendChild(para2);
                    para2.textContent = "Température : "+temperature+ " °F" ;
                    const para3 = document.createElement('p');
                    document.body.appendChild(para3);
                    para3.textContent = "Coordonnées : "+latitude+" en lat. et "+longitude+" en long." ;

                    });

/*
Echaznge du site web avec JSON? On fait communiquer un serveur avec des logiciels, 
Dans cet exo, on récupère des coordonnées (là, pour l'instant, on les affiche en vrac)
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
