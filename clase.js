let amigos = ["Manuel","Santiago","Juan Segundo","Bautista","Matias","Tomas","Felix"]

let duda = prompt("Decime un nombre y te digo si lo conozco")

function tengoamigo(){
    let resp = amigos.indexOf(duda)
    // != -1 seria como que no sea negativo
    if(resp != -1){
        alert("Es amigo mio")
    }else{
        alert("¡Deberia tener un amigo llamado asi!")
    }
}

tengoamigo();