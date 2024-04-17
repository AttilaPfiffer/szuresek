export function tablazatRendez(lista, irany) {
    lista.sort(function(a, b) {
        
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1 * irany : -1 * irany
    });
    return lista
}

export function atalakit(szoveg) {

}

export function szuresNevSzerint(lista, szurtSzoveg) {
    const SZURTLISTA = lista.filter(function(elem) {
        return elem.nev.includes(szurtSzoveg)
    })
    return SZURTLISTA
}

export function sorTorles(lista, index) {
    lista.splice(index, 1)
    return lista;
}