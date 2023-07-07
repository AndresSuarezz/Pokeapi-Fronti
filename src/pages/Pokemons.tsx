import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons'
import Header from '../components/Header'
import { Pokemon } from '../types/types'
import Loading from '../components/Loading'
import { waitFor } from '../utils/utils'

const Pokemons = () => {
  const [query, setQuery] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllPokemons = async () => {
      await waitFor(1000)
      const allPokemons = await fetchPokemons()
      setPokemons(allPokemons)
      setIsLoading(false)
    }
    fetchAllPokemons()
  }, [])

  if (isLoading || !pokemons) {
    return <Loading />
  }

  const filterPokemons = pokemons?.slice(0,180).filter((pokemon) => (
    pokemon.name.toLowerCase().match(query.toLowerCase())
  ))

  return (
    <>
    <Header query={query} setQuery={setQuery} />
    <main className={style.main}>

      {filterPokemons?.slice(0, 180).map((pokemon) => (
        <Link key={pokemon.id} className={style.card} to={`/pokemons/${pokemon.name.toLowerCase()}`}>
          <img className={style.imgPokemon} src={pokemon.imageSrc} />
          <p className={style.namePokemon}>{pokemon.name}</p>
        </Link>
      ))}

    </main>
    </>
    
  )
}

export default Pokemons