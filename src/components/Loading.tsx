import Pokedex from '../assets/img/pokedex.png'
import style from '../styles/loading.module.css'

const Loading = () => {
  return (
    <div className={style.loading}>
        <img className={style.loadingIcon} src={Pokedex} alt="Loading Poledex" />
    </div>
  )
}

export default Loading