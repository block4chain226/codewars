//A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet,
// where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

function SubstitutionCipher(abc1, abc2) {
    const mapping = (abc1, abc2) => {
        const first = abc1.split('')
        const second = abc2.split('')
        return new Map(first.map((item, i)=>{
            return [item, second[i]]
        }))
    }
    const encodeMap = mapping(abc1, abc2)
    const decodeMap = mapping(abc2, abc1)

    const encode = (str) => {
        let Str = str.split('').map(char => {
            const symb = encodeMap.get(char)
            if(!symb) return char
            return symb
        })
        return Str.join('')
    }

    const decode = (str) => {
        let Str = str.split('').map(char => {
            const symb = decodeMap.get(char)
            if(!symb) return char
            return symb
        })
        return Str.join('')
    }
    return {encode, decode}
}