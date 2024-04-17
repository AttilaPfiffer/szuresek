import { emberekLISTA } from "./adat.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
import { sorTorles, szuresNevSzerint, tablazatRendez } from "./adatkezelo.js";
/* jelenítsük meg az adatainkat egy táblázatban az adatok div-ben az urlap divben legyen egy űrlap, amivel ilyen adatokat tudunk táblázatba beletenni 

1. ha a táblázat név fejlécére kattintunk, akkor azon mező szerint tudjuk rendezni a táblázatot.
2. tudjuk törölni a táblázat adott sorát
3. legyen egy szűrőmező, ahova beírva szavakat, tudunk szűrni név szerint 

Milyen függvények kellenek?

1. tablazatOsszeallit(lista) -> txt - összeállítja a html kódot szöveges formátumban
2. megjelenites(txt) -> nincs - megjeleniti a szöveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az űrlap adatokat és hozzáfűzi a listához, majd megjeleníti újra a táblázatot. - akkor hívódik meg, ha a hozzáad gombra kattintunk
4. tablazatRendez() - adott mező szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat adott fejléc mezőjére kattintunk, paraméterezzük a listát, és megjelenítjük újra a táblázatot.
5. sorTorles(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.
6. szuresNevSzerint(lista, szurtszoveg) -> szurtlista - a szűrőbe írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.
Ezután megjelenítjük a szűrt listát az oldalon.
Akkor fog lefutni amikor megváltozik a szűrőmező tartalma
*/

let nevIrany = 1;
init(emberekLISTA)
nevSzuresEsemeny();

function init(lista) {
    let txt = tablazatOsszeallit(lista)
    megjelenites(txt)
    nevRendezEsemeny(lista);
    sorTorlesEsemeny();
}


function nevRendezEsemeny(lista) {
    const nevELEM = $(".adatok th").eq(0)
    nevELEM.on("click", function() {
        const LISTA = tablazatRendez(lista, nevIrany)
        console.log(LISTA)
        nevIrany *= (-1)
        init(LISTA);
    })
}

function nevSzuresEsemeny() {
    const szuroELEM = $("#szNev")
    szuroELEM.on("keyup", function() {
        let szuroSzoveg = szuroELEM.val()
        const LISTA = szuresNevSzerint(emberekLISTA, szuroSzoveg)
        init(LISTA)
    })
}


function sorTorlesEsemeny() {
    const kukaELEM = $(".kuka")
    kukaELEM.on("click", function() {
        let index = event.target.id
        const LISTA = sorTorles(emberekLISTA, index)
        init(LISTA)
    })
}
