import { useState } from "react"
import BuyButton from "./BuyButton"

const Card = ({ title, price, image, id, heredatedFunction }) => {
    const [wanted, setWanted] = useState(false)

    // const handleClick = (idtoUse) => {
    //     heredatedFunction(idtoUse)
    // }

    return (
        <div key={id} className=" h-96 rounded-lg flex flex-col justify-center items-center shadow-2xl p-2">
            <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">{title}</h3>
            <div className="h-5/6 overflow-hidden xl:aspect-h-8 xl:aspect-w-7 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="h-auto w-4/6 max-h-80 object-cover object-center group-hover:opacity-75 xl:aspect-h-8 xl:aspect-w-7"
                />
            </div>
            <p className="mt-1 text-lg font-medium">${price}</p>
            {wanted ? <BuyButton heredatedFunction ={heredatedFunction} id={id} /> : <button className="text-white font-bold rounded-none bg-sky-500 p-1 px-4" onClick={() => { setWanted(true) }}>Add to Cart</button>}
        </div>
    )
}

export default Card