const ProductDescription = ({ style2 = '2'}) => {
    if (style2 === '1') {
        return (
            <div className="pt-3">
                <ul>
                    <li className="relative">
                        <h2 className="text-2xl uppercase ">Name</h2>
                    </li>
                    <li><h2 className="text-xl text-green-900"><strong>Price</strong></h2></li>
                    <li className="pt-3">
                        <p className="text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s
                        </p>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="border-4 border-black p-5 mt-5">
                <table style={{width: '300px'}}>
                    <tr>
                        <td>Name</td>
                        <td className="text-center">Rank</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td className="text-center">Hash Creator</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ProductDescription;