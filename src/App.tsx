import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Pokemons, Pokemon, Items} from './pages'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <div className='contenedor'>
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/items' element={<Items />}/>
          {/* <Route path='/items/:itemid'/> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
