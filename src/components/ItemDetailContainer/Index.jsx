import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/Index'

const ItemDetailConteiner = () => {
  const [data, setData] = useState([])
  const {name} = useParams()

  const dataJson = () => {
    axios
      .get('/vinos.json') // hace peticion a api o json de datos
      .then((res) => setData(res.data)) // obtiene respuesta y la muestra 
      .catch((err) => console.log(err)) // si hay un error en peticion arroja por consola el error
  }

  useEffect(() => { //Hay que importar el useEffect para que funcione
    setTimeout(() => { dataJson },)
  }, []) // el UseEffect [] --> Para se ejecute cuando se monta el sitio. [prop1] --> En montaje y para cada cambio de la prop que se le de a State [prop1,prop2] --> Cuando cambia alguna de las 2 prop cambia el State
  // en las props de useEffect tienen que ser states
  //variable que guarda petision a datos JSON x axios

  data.find((item) => {
    if (item.nombre === name) {
      return <ItemDetail data={data} />
    } else {console.log('no hay descripcion del producto');}
  })
  // return (
  //   <>
  //   <ItemDetail data={data}  />
  //   </>

  // )
}

export default ItemDetailConteiner

