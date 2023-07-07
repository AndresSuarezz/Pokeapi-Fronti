import { useEffect, useState } from "react"
import { fetchItems } from "../api/fetchItems"
import { Item } from "../types/types"
import { waitFor } from "../utils/utils"
import Loading from "../components/Loading"
import style from "../styles/items.module.css"

const Items = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchAllItems = async () => {
      await waitFor(1000)
      const allItems = await fetchItems()
      
      const pokemonesItems = []

      for (const item of allItems) {
        const img = await fetch(item.url)
          .then(res => res.json())
          .then(data => data.sprites.default)
          .catch(error => new Error(error))
        
        const coste = await fetch(item.url)
          .then(res => res.json())
          .then(data => data.cost)
          .catch(error => new Error(error))
        
        pokemonesItems.push({ ...item, img, coste })
      }

      setItems(pokemonesItems)
      setIsLoading(false)
    }
    fetchAllItems()
  }, [])

  if (isLoading || !items) return <Loading />


  return (
    <>
      <main className={style.contenedor}>
        <h2 className={style.itemTitle}>Items</h2>
        <div className={style.items}>
          {items.map((item) => (
            <div className={style.cardItem} key={item?.name}>
              <img className={style.img} src={item?.img} alt="itemsPhoto" />
              <p>{item?.name}</p>
              <p className={style.cost}>${item?.coste}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Items