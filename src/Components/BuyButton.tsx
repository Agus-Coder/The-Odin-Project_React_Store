import { useState } from "react"

const BuyButton = ({ heredatedFunction, id }) => {
    const [counter, setCounter] = useState(1)

    const countUp = () => {
        setCounter(counter + 1)
    }
    const countDown = () => {
        counter > 1 ? setCounter(counter - 1) : ""
    }

    const handleClick = (useId: number, quantity: number) => {
        heredatedFunction(useId, quantity)
    }

    return (
        <div className="flex justify-between items-center w-64">
            <button className="text-white font-bold rounded-none bg-sky-500 p-1 px-4" onClick={() => { countDown() }}>-</button>
            <p>{counter}</p>
            <button className="text-white font-bold rounded-none bg-sky-500 p-1 px-4" onClick={() => { countUp() }}>+</button>
            <button className="text-white font-bold rounded-none bg-sky-500 p-1 px-4" onClick={() => { handleClick(id, counter) }}>Add to Cart</button>
        </div>
    )
}

export default BuyButton