import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/Index'
import { db } from '../../../db/firebase-config'
import { doc, getDoc } from "firebase/firestore"

const ItemDetailConteiner = () => {

//param de la url
const { id } = useParams()
const [item , setItem] = useState({})
//funcion que obtiene el detalle de un item
const getDetail = async (id) => {
  //se obtiene la referencia del documento de firebase
  const itemDetailRef = doc(db, "vinos", id);
  //se obtiene el documento de firebase
  const detailDoc = await getDoc(itemDetailRef);
  //si existe el documento se retorna el objeto con los datos del documento, sino se retorna null
  if (detailDoc.exists()) {
    setItem(detailDoc.data())
  } else {
    return null
  }
}

  //se ejecuta solo si cambia el valor de id
  useEffect(() => {
    getDetail(id)
  },
    [])

  return (
    <>
      <ItemDetail data={item} />
    </>
  )
}

export default ItemDetailConteiner
