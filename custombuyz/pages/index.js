import Product from './../components/Product/index';
import ProductsFeatured from './../components/ProductsFeatured/index';
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-40 md:mt-20 mb-20">
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-2 md:gap-4 md:pt-5 md:mt-5 lg:grid-cols-4'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10'>
          <span className='text-center text-7xl'>Section</span>
          <ProductsFeatured>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
          </ProductsFeatured>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>        
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
