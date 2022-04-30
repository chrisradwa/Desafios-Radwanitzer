import './Item.css'

const Item = ({maquina}) => {
    return(
        <div>
            <img src={maquina.img}/>
            <p>{maquina.nombre}</p>
            <hr />
        </div>
    )
}

export default Item