import ProductAvatar from './../ProductAvatar/index';
import ProductDescription from './../ProductDescription/index';

const Product = ({ style2 = '2'}) => {
    if (style2 === '1') {
        return (
            <div className="shadow-md hover:shadow-lg p-5 rounded-md divide-y divide-dashed cursor-pointer">
                <ProductAvatar
                    description="hola"
                    src="https://img.freepik.com/foto-gratis/forme-zapatos-corrientes-zapatilla-deporte-aislados-blanco_47469-442.jpg?size=626&ext=jpg"
                />
                <ProductDescription style2={'1'} />
            </div>
        )
    } else {
        return (
            <div>
                <div className="border-4 border-black">
                    <ProductAvatar
                        description="hola"
                        src="https://img.freepik.com/foto-gratis/forme-zapatos-corrientes-zapatilla-deporte-aislados-blanco_47469-442.jpg?size=626&ext=jpg"
                    />
                </div>
                <ProductDescription />
                <div className="border-4 border-black mt-5 p-5">
                    <button type="button">cart</button>
                    <button type="button" className="ml-5">favorite</button>
                </div>
            </div>
        )
    }
}

export default Product;