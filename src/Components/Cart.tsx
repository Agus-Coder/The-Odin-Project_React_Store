const Cart = ({ itemsInCart, total, deleteFunction, clear, done }) => {

    const handleDelete = (idToDelete: number) => {
        deleteFunction(idToDelete)
    }

    const handleClear = () => {
        clear()
    }

    return (
        <div className="h-5/6 grid grid-cols-4 gap-4 p-10 pt-5">
            <div className="flex flex-col justify-center col-span-3 shadow-2xl h-full px-2">
                <h1 className="text-4xl mb-4">Your cart</h1>
                <div className="h-5/6 flex flex-col items-center">
                    <div className="w-full flex flex-col justify-center px-5">
                        <div className="flex border-b-2 items-center justify-around border-slate-400 mb-2">
                            <p className="w-20">{""}</p>
                            <p className=" w-2/4">Description</p>
                            <p>Price</p>
                            <p>Remove</p>
                        </div>
                        {itemsInCart.map((item) => (
                            <div className="flex border-b-2 items-center justify-around border-slate-200 pb-5 mb-5">

                                <div className="w-28 h-fit flex justify-center">
                                    <img src={item.image} alt="" className="h-auto" />
                                </div>

                                <div className="flex flex-col w-2/4">
                                    <h1 className="text-xl mb-1">{item.title}</h1>
                                    <p className="text-sm mb-1">{item.description}</p>
                                    <p className="text-xs self-end mt-2 ">Price per unit: ${item.price} - Units: {item.quantity}</p>
                                </div>

                                <div>${(item.price * item.quantity).toFixed(2)}</div>

                                <div className="flex items-center justify-center">
                                    <button className="bg-red-500 text-white font-bold rounded-none p-1 px-4" onClick={() => { handleDelete(item.id) }}>Remove</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="text-2xl flex flex-col items-center justify-center shadow-2xl h-2/5">
                <p className="mb-5">Total: ${total.toFixed(2)}</p>
                <button className="bg-lime-500 text-white font-bold rounded-none p-1 px-4" onClick={() => { handleClear() }}>Confirm purchase</button>
                {done ? <p>Thank you for your purchase!</p> : ""}
            </div>
        </div>
    )
}

export default Cart