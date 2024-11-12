function scramble(str1, str2) {
    str2 = str2.split('')
    let temp = str1
    let newStr = ''
    for (let i = 0; i < str2.length; i++) {
        if (temp.includes(str2[i])) {
            temp =  temp.replace(str2[i], '')
            newStr += str2[i]
        }
        if (newStr.length === str2.length) {
            return true
        }
    }
    return false
}


