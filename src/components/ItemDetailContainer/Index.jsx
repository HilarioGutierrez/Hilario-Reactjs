import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/Index'

const ItemDetailConteiner = () => {
  const [data, setData] = useState({})
  const { name } = useParams()

  const dataJson = () => {
    axios
      .get('../vinos.json') // hace peticion a api o json de datos
      .then((res) => {
        // obtenemos los datos
        const data = res.data;
        // filtramos por id
        const dataFiltrada = data.find(el => el.nombre === name)
        // actualizamos el estado con esa info
        setData(dataFiltrada)
      })
      .catch((err) => console.log(err)) // si hay un error en peticion arroja por consola el error
  }

  useEffect(() => {
    dataJson()
  }, 
  //En los [] se le puede pasar una variable que se va a estar observando para que se ejecute el useEffect. en este caso es el name del useParams.
  [name])

  return (
    <>
      <ItemDetail data={data} />
    </>
  )
}

export default ItemDetailConteiner
