import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/Index'
import { db } from '../../../db/firebase-config'
import { collection, getDocs } from "firebase/firestore"

const ItemDetailConteiner = () => {
  const { name } = useParams()

  //state que guarda datos de la coleccion de firebase
  const [data, setData] = useState([])
  //variable con coleccion de datos de firebase
  const dataCollection = collection(db, "vinos")
  //funcion que obtiene datos de firebase
  const getData = async () => {
    const querySnapshot = await getDocs(dataCollection);
    //en 'docs' del objeto obtenido por getDocs se encuentran los datos de la coleccion. Por eso se utiliza .docs
    const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    //buscar detail de producto por params
    const dataFiltrada = docs.find(el => el.nombre === name)
    //se actualiza el state con los datos obtenidos
    setData(dataFiltrada)
  }

  //se ejecuta solo si cambia el valor de name
  useEffect(() => {
    getData()
  },
    [name])

  return (
    <>
      <ItemDetail data={data} />
    </>
  )
}

export default ItemDetailConteiner
