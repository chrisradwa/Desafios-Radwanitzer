import Item from "../Item/Item"

const ItemList = ({equipos}) => {
    return(
        <div>
            {equipos.map((equipo) =>
                <Item maquina={equipo}/>
            )}
        </div>
    )
}

export default ItemList