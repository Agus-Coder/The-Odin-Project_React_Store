import Card from "./Card"

const Products = ({setFunction, list}) => {
    return (
        <div>
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-48">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {list.map((product) => (
                        <Card title={product.title} price={product.price} image={product.image} id={product.id} heredatedFunction={setFunction} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products