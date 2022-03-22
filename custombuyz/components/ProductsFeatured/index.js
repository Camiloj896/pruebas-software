import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/**
 * @description Screens {mobile: < 640px, tablet: 641px - 1023px}
 * @description Screens {desktop: 1024px - 1280px, LargeDesktop: > 1281  }
 * @param {number} IlargeDesktop LargeDesktop items number default '4'
 * @param {number} Idesktop Desktop items number default '3'
 * @param {number} Itablet Tablet items number default '2'
 * @param {number} Imobile Mobile items number default '1'
 */
const ProductsFeatured = ({ 
    children,
    IlargeDesktop = 4,
    Idesktop = 3,
    Itablet = 2,
    Imobile = 1
}) => {
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1281 },
          items: IlargeDesktop
        },
        desktop: {
          breakpoint: { max: 1280, min: 1024 },
          items: Idesktop
        },
        tablet: {
          breakpoint: { max: 1023, min: 641 },
          items: Itablet
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: Imobile
        }
    };

    return (
        <Carousel responsive={responsive}>
            { children }
        </Carousel>
    )
}

export default ProductsFeatured;