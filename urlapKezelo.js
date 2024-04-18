import { init } from "./main.js"


export function adatokLista(lista) {
    let adat = {
        nev: "",
        kor: 0,
        nem: true
    }
    
    const submitELEM = $("#submit")
    submitELEM.on("click", function(event) {
        
        event.preventDefault()
        const nevELEM = $("#nev")
        const korELEM = $("#kor")
        const nemELEM = $("input[name = 'nem']:checked")
        //console.log(nemELEM.eq(0).is("checked").val())
        adat = {
            nev: nevELEM.val(),
            kor: korELEM.val(),
            nem: nemELEM.val() === "false" ? false:true
        }
        const validELEMEK = $(".valid-feedback")
        console.log(validELEMEK.eq(0).css(display))


        console.log(adat)
        lista.push(adat)
        init(lista)
    })
}