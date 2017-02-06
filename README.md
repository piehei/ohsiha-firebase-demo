# ohsiha-firebase-demo
TTY:n Ohjelmallinen sisällönhallinta -kurssin Firebase-demon repo

Koodiklikinassa ke 1.2.2017 katsottiin hieman Firebasen reaaliaikatietokannan toimintaa demon merkeissä.

### Mikä Firebase?
Firebase on Googlen omistama palvelu, joka tarjoaa kaikenlaisia tuotteita sovelluskehitykseen sekä natiivilla että web-puolella. Yksi niistä on reaaliaikatietokanta, jonka ympärille on näppärä rakentaa esimerkiksi nettisivuja, joilla on interaktiisia sisällön näyttämiseen, tallentamiseen tai muokkaamiseen liittyviä toimintoja (todo-lista, chat, ristinolla jne.).

### Mikä reaaliaikatietokanta?
Sellainen tietokanta, johon esimerkiksi nettisivu voi luoda jatkuvan, keskeytyksettömän yhteyden: voidaan kirjoittaa tietokantaan ja samalla saada tietoa (sekä omista että) muiden kirjoitusoperaatioista samaan tietokantaan. Firebasen JavaScript-kirjaston välityksellä tämä informaatio liikkuu sekä tietokantaan että tietokannasta erittäin yksinkertaisesti ja pienellä vaivalla. API on melko pieni ja nopea omaksua, minkä vuoksi MVP-käpistysten demoilu ja kokeilu on helppoa.

### Mitä demon aikana rakennettiin?
Luotiin yksinkertainen nettisivu, jossa on lomake viestin lähettämistä varten. Lomakkeen lähettäminen kirjoitti viestin Firebasen tietokantaan. Sivulla oli myös lista, johon kaikki tietokantaan kirjoitetut viestit tulivat automaattisesti näkyviin. Yksinkertaisella koodilla saatiin siis aikaan reaaliaikaisesti päivittyvä lista viestejä, joita kaikki saattoivat kirjoittaa ja jotka päivittyivät kaikkien näytölle samaan aikaan. Demo on tiedostoissa index.html ja demo.js.

### Miten pääsee kokeilemaan?
Mene https://firebase.google.com ja luo projekti (se on ilmainen). Projektin luomisen jälkeen vasemmasta laidasta "Overview". Tämän jälkeen keskeltä isosta nappulasta "Add Firebase to your web app". Nappulasta avautuva modaali kertoo, mitä tietoa nettisivulle pitää lisätä, jotta yhteys Firebaseen muodostuu (samat asiat dokumentoituna index.html-tiedostossa!). Nuo näytetyt oman projektin tiedot voi kopioida suoraan tämän repon index.html-tiedoston alkuun ja avata tiedoston omassa nettiselaimessa. Lopuksi on asetettava Firebasen vasemman valikon "Database"-kohdan "Rules"-välilehdeltä kirjoitusoikeus tietokantaan. Nyt tietokantaan voi kirjoittaa ja lukea kaikilta sellaisilta nettisivuilta, joissa on juuri tuon Firebase-tietokannan määrittelyt asetettuna.

Voit kloonata tämän repon ja lisätä oman projektisi tiedot index.html:ään, niin saat 1:1 samalla tavalla toimivan demon.

### Nettisivujen hostaus?
Firebase tarjoaa ilmaisen hostauksen staattisille nettisivuille. Ne voi jopa laittaa oman domainin taakse. Tätä varten tutustu Firebasen oppaisiin.

### Linkkejä
Firebasen kotisivut
https://firebase.google.com

Add Firebase to your JavaScript Project
https://firebase.google.com/docs/web/setup

Kattava kasa erilaisia esimerkkiprojekteja
https://firebase.google.com/docs/samples/#web

Huomioitavaa: kaikki esimerkit toimivat pelkällä html-tiedostolla, joka sisältää JavaScript-koodia, ja joka on avattu paikallisesti omassa nettiselaimessa file://...:n kautta. Kokeillaksesi näitä esimerkkejä ja demoillaksesi Firebasen kanssa mitään ei tarvitse osata laittaa Internetiin kaikkien saataville.
