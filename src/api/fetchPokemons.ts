// https://unpkg.com/pokemons@1.1.0/pokemons.json

import { Pokemon } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemons():Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  if (!response.ok) {
    throw new Error("Error fetching pokemons");
  }
  const results = await response.json();
  //console.log(results);

  const pokemons = results.results.map((result:any) => ({
    id: result.national_number,
    name: result.name,
    imageSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(result.name.toLowerCase())}.gif`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon: Pokemon, index: number) =>
      pokemons.findIndex((other: Pokemon) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
