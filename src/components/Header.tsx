import style from '../styles/header.module.css'

type HeaderProps = {
    query: string,
    setQuery: (query: string) => void
}

const Header = ({ query, setQuery }: HeaderProps) => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>P.o.k.e.d.e.x</h1>
            <input className={style.input} 
                placeholder='Busca el Pokemon'
                type="text" 
                value={query}
                onChange={(evt) => setQuery(evt.target.value)} />
        </header>
    )
}

export default Header