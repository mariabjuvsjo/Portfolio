---
Title: About
Description: About the scss.
---

About SCSS. 
==========================
different techniques I use .
--------------------------
![sass-img](image/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0.0178421215493876488854.png?w=200&h=200#imgAbout)

På denna sida har jag använt mig av Css, Scss. Jag har även importerat fontawesome och googlefonts.

När det kommer till Scss så började jag med att dela upp all styling-kod i olika moduler och sedan med hjälp av @import drog in alla moduler i style.scss. Högst upp la jag normaliza.css och alla fontawesome moduler, sedan googlefonts importerna och efter alla externa importer la jag mina modulimporter.

Har använt mig av Scss variabler för att kunna återanvända färger, fonter och även en variabel till transitions när man hovrar. Ju mer jag utvecklar mitt tema kommer jag försöka använda fler variabler, till exempel till mediaquerys och layouter som man återanvänder ofta.

Jag har skapat ett light theme till min hemsida med hjälp av @mixin och @include som jag lagt i resets.scss filen. När man anger lighttheme:true så blir det ljusare bakgrunder och mörk text. Men eftersom jag vill ha ett darktheme så har jag den satt till lighttheme:false just nu. 

Jag har använt mig av en del nestlande element, inte när jag har en class inut i en class men om jag har tillexempel ett a efter nav som inte har en class så har jag använt mig utav fördelarna med nestade element och även &:hover nestad med det elementet man ska hovra över är mycket användbart. När jag kommer vidare i projektet ska jag försöka använda fler funktioner och mixins som Scss erbjuder. 
