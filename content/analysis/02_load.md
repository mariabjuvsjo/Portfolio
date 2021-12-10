---
Title: Loading
Description: Analyse loading time.
---

Analys
=======================

Laddningstid för en webbplats 
--------------------------------

Denna uppgift handlar om att analysera tre olika webbplatsers laddningstid. Hur snabbt eller långsamt de laddar på både desktop och mobil och ta reda på varför.

Urval
-----------------------

### Liten, Mellan, Stor

Jag har valt att utforska tre webbplatser med totalt olika storlekar. Jag tyckte det kunde vara intressant och reflektera över om en mega stor webbplats som Amazon laddar mycket längre än en pytteliten webbplats som Stenhuse Gård, eller om det rent av kan vara tvärtom. Så de webbplatser jag valt är:

<ol>
<li>Amazon</li>
<li>Avanza</li>
<li>Stenhuse Gård</li>
</ol>

Metod
-----------------------

Min metod för att göra analysen är att mäta laddningstiderna på 3 av webbplatsens sidor, på respektive webbplats. För att utföra detta tar jag hjälp av googles pagespeed insights och av firefoxs devtool, som hjälper mig att mäta sidans laddningstid, hur stor sidan är och hur många request den utför. Jag använder mig även av Excel från googleSheets och länkar här i min analys rapport.



Resultat
-----------------------

<div class= "spread-sheet">
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5H6QZokkndp1UpsRWRFZExaVffZoFx7TEKuvK9nXezflhhZTtYeZ_6GZVogAtQ3Y1z460v9LCMDwk/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe></div>

###AVANZA

![avanza](../image/avanza.png?w=500&save-as=jpg)
<ol>
<li><a href="https://www.avanza.se/start" target="_blank">startsida</a> </li>
<li><a href="https://www.avanza.se/aktier/aktieinspiration.html" target="_blank">AktieInspiration</a></li>
<li><a href="https://www.avanza.se/kundservice.html/" target="_blank">Kundservice</a></li>
</ol>

Avanzas startsida har en del förbättringspotential. Det man kan se är att bilderna går att förbättra genom att ändra filformat på dem. Goggle pagespeed föreslår bildformat som WebP och AVIF, som bättre komplimering. Oavsett så kunde man i alla fall bytt en del png filer till jpg. Man verkar heller inte använda rätt storlek till rätt skärm på de flesta av bilderna. Pagespeed varnar också för att alla element inte har en utsatt width och height.

Avanzas kundservice sida presterar lite bättre men det antar jag har att göra med att man har betydligt mindre bilder. Men även här finns förbättringsområden som att minifiera en del CSS filer, lägga till font display så att man kan läsa texterna även om webbfonterna laddar.

Avanzas aktieinspiration sida är den som presterar bäst. Den får inte så många anmärkningar på pagespeed och bildernas storlek är mycket mindre även om det är svg, antagligen för att de är enbart tecknade ikoner. Vilket även återspeglar sidstorleken som är minst av alla tre, även om den inte upplevs som det när man skrollar igenom den.

I stort tycker jag avanza har klarat sig bra i testerna, men det finns definitivt förbättringsområden, som att ändra filformat i bildera, en del javascript kan för bättras och en del CSS som kan minifieras.

###AMAZON

![amazon](../image/amazon.png?w=500&save-as=jpg)

<ol>
<li><a href="https://www.amazon.com/" target="_blank">Startsida</a></li>
<li><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer" target="_blank">Om Amazon</a></li>
<li><a href="https://www.amazon.com/music/lp/podcasts?ref_=nav_em__dm_nav_rh_0_2_2_4" target="_blank">Amzon Music</a></li>
</ol>

Amazon är såklart en storspelare på nätet, eftersom också hela deras affärside går ut på att man ska stanna kvar på deras sida och handla där. Så att sidan laddar snabbt skulle man kanske kunna förvänta sig av ett av världens största tech-bolag.

Amazons startsida presterar bra i alla tester, med tanke på att amazons startsida har ca 4 gånger fler request än övriga konkurenter i detta test och ändå bara har en aning högre laddningstid, så får man nog säga att Amazon är den webbplats som behöver minst förbättringar.

Men samtidigt som jag nämde innan är man ett av världens rikaste företag kanske man ska förvänta sig att alla åtgärder som pagespeed föreslår borde vara fixade. Även här kan man fixa lite med anpassnign av bildens storlek i olika skärmar och med font display.








###STENHUSE GÅRD

![stenhusegard](../image/stenhuse.png?w=500&save-as=jpg)

<ol>
<li><a href="http://www.stenhusegard.se/" target="_blank">Startsida</a></li>
<li><a href="http://www.stenhusegard.se/om-oss/personal/" target="_blank">Stenhuse Gård Personal</a></li>
<li><a href="http://www.stenhusegard.se/kontakt/" target="_blank">Kontakt</a></li>
</ol>

Stenhuse Gård är en betydligt mindre webbplats än både Avanza och Amazon. Storleken på varje sida är väldigt liten men ändå laddar sida i samma hastighet som Avanza. Det finns absolut mycket förbättrings potential på denna webbplats och man kan även vid första anblick se att detta är en ganska B-webbplats som behöver en uppdatering i mycket mer än bara prestanda. 

vad man får fram av google pagespeed analys verkar det som att det är många resurser som blockerar renderingen av hemsidan. Det verkar vara mycket CSS och JS biblotek som tar tid att ladda. Vad jag kan se verkar heller ingeting vara minifierat. 

Stenhuse gård får samma anmärkning som avanstående webbplater, bilder i modernare filformat och att man ska ha rätt bildstorlek för rätt skärm.

Analys
-----------------------

Efter att ha tittat på dessa tre webbplatser kan jag konstatera att de absolut vanligaste åtgärderna som behövs göras är att ändra något med bilderna. De tre vanligaste saker att göra med bilderna är att ändra filformatet, se till att det finns en angiven width+height och att anpassa bildens storlek till olika typer av skärmar. 

Det jag kan se är att alla tre webbplatser fick i stort sätt samma typ av anmärkning från google pagespeed. Min analys är dock att stora företag som Amazon och Avanza väljer att ignorera dessa anmärkningar detta tror jag eftersom man antar att sådana stora företag har varit inne och kollat på google page speed. Däremot att små webbplatser som Stenhuse Gård inte har gjort några åtgärder är nog pga att de inte har de resurser som krävs för att uppdatera sin hemsida. De har antagligen betalt en firma elle bekant att göra deras webbplats för ca 10 år sedan och sedan inte gjort något med den. 

Jag tycker dock att alla webbplatser klarar sig bra och det är ingen av sidorna jag reagerar på tar lång tid. 

Att Amazons startsida tar 1 sekund att ladda tror jag inte ens man reflekterar över, eftersom det är så många saker på sidan som hunnit laddat upp så ögat hinner ändå inte landa i hela webbplatsen innan 1 sec har gått.

Jag tycker det är svårt att utse en vinnare i detta test, eftersom jag valt tre helt olika webbplatser när det gäller både storlek på webbplats och storlek på företag. 
Dessutom fick Avanza bäst i laddningstid men sämst i google Pagespeed, så det kändes lite svårt att lita helt blint på antingen google page speed eller firefox devtools.

 Men om jag skulle sammanfatta alla tester och försöka ranka dem enligt något slags medelvärde (ej matematiskt, utan mer en höftare) så skulle jag nog säga:

1. Avanza
2. Amazon
3. Stenhuse Gård

Dett altså om man kollar på testerna. Om jag istället kollar bara med det nakna ögat skulle jag ranka annorlunda, nämligen:

1. Stenhuse Gård
2. Amazon
3. Avanza

Alltså helt motsats, vilket jag kan tycka är konstigt och inte riktigt kan komma fram till varför jag upplever att Avanzas startsida tar långt tid att ladda men laddnings tiden i devtools är bäst hos Avanza. 

Jag tycker även det är svårt att utse en maxgräns vad en sida får ladda. Det finns så många faktorer som spelar in som lazy load och vad som finns på sidan, så därför väljer jag att inte göra det. Så klart har man en sida som tar över 2 sekunder är det förstås för lång tid. Man är som användare inte speciellt förlåtande om en video eller bild inte laddar klokt. Då är det ofta good-bye den webbplatsen och in på en annan.

Men det jag kan säga är att om man är en webbutvecklare, varför inte ta den extra tiden i slutet av ett projekt och gå igenom alla bilder så de har de bästa förutsättningarna att ladda fort, fixa minifierad kod och se till att sidan funkar utan Java Scrip osv osv.


Referenser
-----------------------

I denna analys har jag inte använt mig utav några referenser.

Övrigt
-----------------------

Författare. Maria Bjuvsjö
