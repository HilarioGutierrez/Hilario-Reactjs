import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/Index'
import { db } from '../../../db/firebase-config'
import { doc, getDoc } from "firebase/firestore"
import Loading from '../Loading/Loading'
import { Box } from '@chakra-ui/react'

const ItemDetailConteiner = () => {
  //state Loading
  const [loading, setLoading] = useState(true)
  //param de la url
  const { id } = useParams()
  //state que guarda  datos dela coleccion de firebase
  const [item, setItem] = useState({})
  //funcion que obtiene el detalle de un item
  const getDetail = async (id) => {
    //se obtiene la referencia del documento de firebase
    const itemDetailRef = doc(db, "vinos", id);
    //se obtiene el documento de firebase
    const detailDoc = await getDoc(itemDetailRef);
    //si existe el documento se retorna el objeto con los datos del documento, sino se retorna null
    if (detailDoc.exists()) {
      //se setea el state con datos y id del documento
      setItem({id: detailDoc.id, ...detailDoc.data()})
      setLoading(false)
    } else {
      return null
    }
  }

  //se ejecuta solo si cambia el valor de id
  useEffect(() => {
    getDetail(id)
  },
    [])

  //condicional para mostrar loading mientras se obtienen los datos de firebase
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' marginTop='100' width='300'>
        <Loading />
      </Box>
    )
  }

  return (
    <>
      <ItemDetail data={item} />
    </>
  )
}

export default ItemDetailConteiner
