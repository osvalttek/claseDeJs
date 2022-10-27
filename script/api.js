async function consumoApi(name) {
    let pokFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokJson = await pokFetch.json()
    return pokJson
}

export default consumoApi