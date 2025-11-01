
function cifrarCesar(frase) {
    let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfmin = "abcdefghijklmnopqrstuvwxyz" //usar mod e usar %
    let out = ""
    for( i=0; i<frase.length; i++){
        let frasein = frase[i];
        if (alf.search(frasein) !== -1) {
            let pos = alf.search(frasein);
            let novaposi = (pos + 4) % 26;
            out += alf[novaposi];
        } else if (alfmin.search(frasein) !== -1) {
            let pos = alfmin.search(frasein);
            let novaposi = (pos + 3) % 26;
            out += alfmin[novaposi];
        } else {
            out += frasein
        }   
    }
    return out
}

let  cifrar = cifrarCesar("Finalmente fiz isso meu deus")
console.log("criptografia", cifrar);