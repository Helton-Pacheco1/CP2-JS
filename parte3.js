function cifrarVigenere(mensagem, palavraChave, modo = 'codificar') {
   
    let textoResultado = '';
    
    let posicaoNaChave = 0;
    
    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem[i];
        
        let ehLetra = (letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z');
        
        if (ehLetra) {

            let ehMaiuscula = (letra >= 'A' && letra <= 'Z');
            

            let numeroLetra;
            if (ehMaiuscula) {
                numeroLetra = letra.charCodeAt(0) - 65;
            } else {
                numeroLetra = letra.charCodeAt(0) - 97;
            }
            
            let letraChave = palavraChave[posicaoNaChave % palavraChave.length].toUpperCase();
            let numeroChave = letraChave.charCodeAt(0) - 65;
            

            let numeroNovo;
            if (modo === 'codificar') {

                numeroNovo = (numeroLetra + numeroChave) % 26;
            } else {

                numeroNovo = (numeroLetra - numeroChave + 26) % 26;
            }
            
      
            let letraNova;
            if (ehMaiuscula) {
                letraNova = String.fromCharCode(numeroNovo + 65);
            } else {
                letraNova = String.fromCharCode(numeroNovo + 97);
            }
            

            textoResultado += letraNova;
  

            posicaoNaChave++;
            
        } else {
            textoResultado += letra;
        }
    }
    
    return textoResultado;
}


console.log('--- Teste 1 ---');
let texto1 = 'HELLO';
let chave1 = 'KEY';
let codificado1 = cifrarVigenere(texto1, chave1, 'codificar');
console.log('Original: ' + texto1);
console.log('Chave: ' + chave1);
console.log('Codificado: ' + codificado1);
console.log('Decodificado: ' + cifrarVigenere(codificado1, chave1, 'decodificar'));
console.log('');


console.log('--- Teste 2 ---');
let texto2 = 'Ola, mundo!';
let chave2 = 'SEGREDO';
let codificado2 = cifrarVigenere(texto2, chave2, 'codificar');
console.log('Original: ' + texto2);
console.log('Chave: ' + chave2);
console.log('Codificado: ' + codificado2);
console.log('Decodificado: ' + cifrarVigenere(codificado2, chave2, 'decodificar'));
console.log('');


console.log('--- Teste 3 ---');
let texto3 = 'JavaScript';
let chave3 = 'CODE';
let codificado3 = cifrarVigenere(texto3, chave3, 'codificar');
console.log('Original: ' + texto3);
console.log('Chave: ' + chave3);
console.log('Codificado: ' + codificado3);
console.log('Decodificado: ' + cifrarVigenere(codificado3, chave3, 'decodificar'));
console.log('');


console.log('--- Como funciona ---');
console.log('A chave repete para cada letra da mensagem:');
console.log('Mensagem: A B C D E F');
console.log('Chave:    K E Y K E Y');
console.log('Resultado:', cifrarVigenere('ABCDEF', 'KEY', 'codificar'));