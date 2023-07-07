import {Link} from 'react-router-dom'
import style from '../styles/footer.module.css'

//Importamos las imagenes
import Pikachu from '../assets/img/pikachu.png'
import Pokeball from '../assets/img/pokeball.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link className={style.footerLink} to="/">
        <img className={style.footerIcon} src={Pikachu} alt="pokemons"/>
      Pokemons
      </Link>

      <Link className={style.footerLink} to="/items">
        <img className={style.footerIcon} src={Pokeball} alt="pokemons"/>
      Items
      </Link>

    </footer>
  )
}

export default Footer