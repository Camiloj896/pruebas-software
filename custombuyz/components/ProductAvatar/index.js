import Image from 'next/image'

/**
 * @param {string} src
 * @param {string} description
 * @param {string} imagesize (small | large) default small
*/
const ProductAvatar = ({ src, description, imagesize }) => {

    const imageSize = !imagesize ? 300 : 
        imagesize === 'large' ? 500 : 300;

    return (
        <Image
            className='rounded-md border-black'
            src={src}
            alt={description}
            width={imageSize}
            height={imageSize}
        />
    )
}

export default ProductAvatar;