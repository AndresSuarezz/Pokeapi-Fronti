import { useParams, useNavigate } from 'react-router-dom'
import pokeball from '../assets/img/pokeball.png'
import style from '../styles/pokemon.module.css'
import { useEffect, useState } from 'react'
import { PokemonDetails } from '../types/types'
import { fetchPokemon } from '../api/fetchPokemon'
import Loading from '../components/Loading'
import { waitFor } from '../utils/utils'

const Pokemon = () => {
    const { name } = useParams()
    const [isLoading, setIsloading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon() {
            await waitFor(3000)
            const fetchedPokemon = await fetchPokemon(name as string)
            setPokemon(fetchedPokemon)
            setIsloading(false)
        }
        getPokemon()
    }, [name])

    if (isLoading || !pokemon) return <Loading />

    return (
        <>
            <button className={style.pokeballButton} onClick={(): void => navigate(-1)}>
                <img className={style.pokeballImg} src={pokeball} alt="regresar" />
                Regresar
            </button>

            <div key={pokemon?.id} className={style.pokemon}>
                <main className={style.pokemonInfo}>
                    <div className={style.pokemonTitle}>{pokemon?.name.toUpperCase()}</div>
                    <div>
                        <img className={style.pokemonInfoImage} src={pokemon?.imgSrc} alt={pokemon?.name} />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Ataque: {pokemon?.attack}</div>
                    <div>Defensa: {pokemon?.defense}</div>
                </main>
            </div>

        </>
    )
}

export default Pokemon