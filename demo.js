// MAT-81000 Ohjelmallinen sisällönhallinta 2017
// Firebase-demo koodiklinikassa
// Tekijä: Pietari Heino

console.log("demo.js");

function kuuntele_viestit() {
    
    // tässä lisätään Firebaseen kuuntelija avaimelle "viestit"
    // nyt joka kerta kun viestit-avaimen alla tapahtuu muutoksia,
    // tätä funktiota kutsutaan. 
    // poisto, lisäys, muutos jne. kaikki aiheuttavat funktiokutsun

    firebase.database().ref("viestit").on("value", function (vastaus) {
        
        // ts. voi olla uutta tai vaikka poistoja
        console.log("uutta dataa:");
        const data = vastaus.val();
    
        console.log(data);
    
        // koska käsittelemme kaiken datan, tyhjennetään listan
        // sisältö ensin kokonaan
        const lista = document.getElementById("lista");
        lista.innerHTML = '';
            
        
        // viestit-avaimen alta löytyy dataa tässä
        // formaatissa:
        //  
        //  viestit: { 
        //      random-avain1: { viesti: tekstiä },
        //      random-avain2: { viesti: jotain muuta }
        //      .
        //      .
        //      .
        //  }

        Object.keys(data).forEach( key => {

            // käydään silmukassa kaikki random-avaimet läpi
            // ja luodaan niiden sisältämistä viesteistä
            // uudet li-elementit listaan
        
            console.log(data[key]);
            const li = document.createElement("li");
            li.innerText = data[key]["viesti"];
            lista.appendChild(li);

        })
    })
}


kuuntele_viestit();


function laheta_uusi_viesti() {
    // tällä funktiolla otetaan formin tekstisisältö
    // nollataan sisältö
    // lähetetään uusi viesti Firebaseen
    const elem = document.getElementById("uusi_viesti");
    const viesti = elem.value;
    console.log(viesti)

    if (viesti === "") {
        return; 
    }

    elem.value = "";

    // tässä on nyt objekti, joka halutaan lähettää 
    // Firebaseen
    const viesti_obj = { "viesti": viesti };

    // kun tiettyyn "kohtaan" eli reffiin Firebasessa 
    // tehdään push-operaatio, Firebase luo automaattisesti
    // uniikin avaimen, jonne pushille annettu objekti
    // talletetaan
    //
    // tämän seurauksena viestit-avaimen alle tulee esim:
    //
    //  _jfkakdl321jkDS: { viesti: "mun viesti!" }
    //
    
    firebase.database().ref("viestit").push(viesti_obj)
        .then(res => { 
            // push palauttaa promisen
            // tutustuminen tarkemmin: googleta javascript promises
            console.log("vastaus: ", res); 
        });
}

document.getElementById("formi").addEventListener('submit', function (evt) { 
    // suoritetaan tämä aina kun formin submit event tapahtuu
    
    // tämä estää sivun latautumisen uudelleen, joka on formin
    // automaattitoiminto selaimissa
    evt.preventDefault();

    laheta_uusi_viesti(); 
});
