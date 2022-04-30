import { useEffect, useState } from "react";
import equipos from "../../data";
import ItemList from "../ItemList/ItemList";

const getEquipos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(equipos)
    }, 2000);
  })
}  

const ItemListContainer = ({greeting}) => {

    const [maquinas, setMaquinas] = useState([]);

    useEffect(() => {
      getEquipos().then((equipos) => {
        setMaquinas(equipos)
      })
    }, [])

    return(
      <div>
          <h1>{greeting}</h1>
          <ItemList equipos={maquinas}/>
      </div>
    )
}

export default ItemListContainer;