let saludar = "hola como estas?"
let copia = saludar.slice(5, 9)
let copia2 = saludar.slice(-6, -1)

function slice(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start += str.length
    if (end < 0) end += str.length
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}
// --------------------------------------------

let sub = saludar.substring()
sub = saludar.substring(5, 6)
sub = saludar.substring(-5, 6)
sub = saludar.substring(-6, -1)

function substring(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start = 0
    if (end > str.length) end = str.length
    if (end < 0) return copia
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}

// ---------------------------------------------

let subs = saludar.substr()


function substr(str, start = 0, end = str.length) {
    if (end != 0) end += start
    return substring(str, start, end)
}
// -----------------------------------
// hacer replace, length,