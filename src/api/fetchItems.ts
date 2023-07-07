import {Item} from '../types/types'

export async function fetchItems():Promise<Item[]> {
    const response = await fetch('https://pokeapi.co/api/v2/item/')

    if(!response.ok) {
        throw new Error('Error en el fetching a items')
    }

    const results = await response.json()
    // console.log(results.results[0].url);
    const items = results.results.map((result:any) => ({
        name: result.name,
        url: result.url,
    }))

    const uniqueItems = items.filter(
        (item:Item, index:number) =>
            items.findIndex((other:Item) => other.name === item.name) === index
    )
    return uniqueItems
}