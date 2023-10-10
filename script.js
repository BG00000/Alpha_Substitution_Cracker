//A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
//Z, C, J, U, D, X, G, P, K, Q, W, M, T, F, S, H, Y, A, B, V, N, E, I, O, L, R

//the input is created using the new randomly substituted alphabet'
//note, this code should be able to solve ANY random letter substitution

// hello --> pdmms
// world --> isamu

//input phrase --> 'it is a nice day today' --> 'kv kb z fkjd uzl vsuzl'

let input = ['kv', 'kb', 'z', 'fkjd', 'uzl', 'vsuzl']

let wordDatabase = ['a', 'i', 'at', 'is', 'an', 'it', 'car', 'day', 'pay', 'road', 'nice', 'fume', 'pool', 'today', 'think', 'hello']
//test 'dataBase'

let sameLengthOutput = {}
//output to an object

function sameLength() {
    for(i = 0; i < input.length; i++) {
        sameLengthOutput[input[i]] = []
        for(j = 0; j < wordDatabase.length; j++) {
            if(input[i].length === wordDatabase[j].length) {
                sameLengthOutput[input[i]].push(wordDatabase[j])
            }
        }
    }
    return sameLengthOutput
}

console.log(sameLength())

function characterSignature() {
    
}