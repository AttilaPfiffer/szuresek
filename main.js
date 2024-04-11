import { emberekLISTA } from "./adat.js";
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
