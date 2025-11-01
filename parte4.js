/* ============================================================
   PARTE 4: CRIPTOGRAFIA RSA DIDÁTICA
   ============================================================ */

function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, 
        privada: { D, N }  
    };
}

/* ============================================================
   CIFRAGEM RSA DIDÁTICA
   ============================================================ */
/**

 * @param {string} mensagem
 * @param {number} E 
 * @param {number} N 
 * @returns {number[]} 
 */
function cifrarRSA_Didatico(mensagem, E, N) {
    const resultado = [];

    for (let i = 0; i < mensagem.length; i++) {
        const x = mensagem.charCodeAt(i); 
        const cifrado = BigInt(x) ** BigInt(E) % BigInt(N);
        resultado.push(Number(cifrado)); 
    }

    return resultado;
}

/* ============================================================
   DECIFRAGEM RSA DIDÁTICA
   ============================================================ */
/**

 * @param {number[]} mensagemCifrada 
 * @param {number} D 
 * @param {number} N 
 * @returns {string} 
 */
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    let texto = "";

    for (let i = 0; i < mensagemCifrada.length; i++) {
        const C = mensagemCifrada[i];
        const decifrado = BigInt(C) ** BigInt(D) % BigInt(N);
        texto += String.fromCharCode(Number(decifrado));
    }

    return texto;
}

/* ============================================================
   TESTE DE VALIDAÇÃO
   ============================================================ */
const PRIMO_1 = 17;
const PRIMO_2 = 19;
const CHAVES = gerarChavesRSA_Didaticas(PRIMO_1, PRIMO_2);

console.log("Chave Pública:", CHAVES.publica);
console.log("Chave Privada:", CHAVES.privada);

const textoOriginal = "OLA";
console.log("\nMensagem Original:", textoOriginal);


const cifrado = cifrarRSA_Didatico(textoOriginal, CHAVES.publica.E, CHAVES.publica.N);
console.log("RSA Cifrado:", cifrado);


const decifrado = decifrarRSA_Didatico(cifrado, CHAVES.privada.D, CHAVES.privada.N);
console.log("RSA Decifrado:", decifrado);