function cifrarAtbash(mensagem) {
    let alfabetoMa ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfabetoMi ="abcdefghijklmnopqrstuvwxyz"
    let resultado =""


    for(let i= 0; i < mensagem.length; i++) {
        let letra = mensagem[i]
        let novaletra = letra

        for(let i= 0; i < alfabetoMa.length; i++) {
            if(letra == alfabetoMa[i]) {
                novaletra = alfabetoMa[25 - i]



            }

        }

        for(let i= 0; i < alfabetoMi.length; i++) {
            if(letra == alfabetoMi[i]) {
                novaletra = alfabetoMi[25 - i]


            }



        }

        resultado = resultado + novaletra

    }
        
    return resultado
    
}

console.log(cifrarAtbash("Olamundo"))

