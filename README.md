# PetNanny-websovellus
## Web-sovelluskehitys 1 -kurssin projektityö

![petnanny_sivu](https://user-images.githubusercontent.com/104062080/236695532-2f5f54e7-babc-4200-8334-deda42c6824f.png)

### Tekijät: Vera Finogenova, Irina Romjalis, Kirsi Tolonen

PetNanny on React-websovellus, jossa käyttäjät voivat jättää ilmoituksia lemmikeistään, jotka tarvitsevat väliaikaista hoitajaa. Myös ihmiset, jotka haluaisivat hoitaa muiden lemmikkejä, voivat jättää ilmoituksia. Ilmoitukset näkyvät websovelluksen etusivulla uusimmasta vanhimpaan.

Käyttäjien täytyy rekisteröityä ennen ilmoitusten jättämistä. Rekisteröitymisen jälkeen käyttäjät voivat jättää ilmoituksia, muokata ja poistaa omia ilmoituksiaan, sekä tallentaa suosikeiksi muiden käyttäjien ilmoituksia.

Kaikkia suunniteltuja toiminnallisuuksia ja haluttuja API:a ei websovellukseen ehditty implementoida toimivassa muodossa, mutta sovelluksen tärkeimmät ominaisuudet ovat toiminnassa.

### Ohjeet
Websovelluksen saat käyntiin seuraavalla tavalla. Kun olet ladannut sovelluksen tiedostot, avaa se valitsemassasi terminaalissa ja anna seuraava komento backend-kansiossa:
```
npm install
npm run dev
```
Tämän jälkeen anna seuraava koemento sovelluksen pääkansiossa ja sovellus avautuu selaimeen:
```
npm install
npm start
```
### REST-apin kuvaus
REST-rajapinta käyttää pyynnöissä kolmea eri osoitetta.

<b>/api/notes</b> -osoitetta käytetään silloin kun pyynnöt liittyvät sivun sisältöön, eli ilmoituksiin. Siihen voi lähettää seuraavia pyyntöjä:<br>
<b>GET</b>-pyyntö lähettää takaisin joko kaikki tietokannasta löytyvät ilmoitukset, tai, jos osoitteen loppuosaan on laitettu ilmoituksen id, se lähettää vain
yhden ilmoituksen, jolla on sama id kuin pyynnön osoitteessa oleva. Jos vastaavaa id:tä ei löydy, vastauksena saa status 404<br>
<b>DELETE</b>-pyyntö poistaa yksittäisen ilmoituksen tietokannasta. Pyynnön mukana lähetetään myös poistettavan ilmoituksen id muodossa /api/notes/id<br>
<b>POST</b>-pyyntö laittaa uuden ilmoituksen tietokantaan<br>
<b>PUT</b>-pyyntö korjaa olemassa olevan ilmoituksen sisältöä. Pyyntö lähetetään osoitteeseen muodossa /api/notes/id, jossa id on muutettavan ilmoituksen id.
Jos kyseistä ilmoitusta ei ole olemassa, vastauksena saa statuksen 400<br>

<b>/api/register</b> -osoitteeseen lähetetään pyyntöjä käyttäjien rekisteröinnin yhteydessä. Siihen on mahdollista lähettää vain seuraavaa pyyntöä:<br>
<b>POST</b>-pyyntö luo uuden käyttäjän tietokantaan tai vastaa virhekoodilla 11000, jos käyttäjänimi on käytössä

<b>/api/login</b> -osoitteeseen lähetetään sisäänkirjautumiseen liittyviä pyyntöjä, ja myös siihen voi lähettää vain yhtä pyyntötyyppiä:<br>
<b>POST</b>-pyyntö tarkistaa onko käyttäjä olemassa ja ovatko käyttäjänimi ja salasana oikein. Jos kaikki on oikein, lähettää vastauksena tokenin
