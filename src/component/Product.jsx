    import React from 'react';
    import { useParams, useNavigate} from 'react-router-dom';
    const Product = () =>{
        // const {product} = useLocation()
        const navigate = useNavigate();

        // const goHomeBtn = () => navigate("/")
        // const params = useParams()
        // const products = params.products

        return(
        <body className="bg-slate-900 ">

        <div className="max-w-[1440px] mx-auto">

            <button className='px-8 py-2 text-white text-center bg-slate-700 m-10'
            onClick={() => navigate('/')}
            >
            <i class="fa fa-arrow-left"></i> Back
            </button>
        </div>
        <div className='container flex mx-auto p-8 pl-0 pr-0'>
            {/* <img src={products.thumbnail} alt="" /> */}
            {/* <div className='p-8 pl-0'>
                <h2 className='font-bold text-2xl mb-8'> {products.title}</h2>
                <p>{products.description}</p>
                <div className='grid grid-cols-2 gap-x-20 gap-y-4'>
                    <p>Price: <span>{products.price}</span></p>
                    <p>discount: <span>{products.discountPercentage}</span></p>
                    <p>rating: <span>{products.rating}</span></p>
                    <p>stock: <span>{products.stock}</span></p>
                    <p>brand: <span>{products.brand}</span></p>
                    <p>category: <span>{products.category}</span></p>
                </div>
            </div> */}
        </div>
        </body>)
    }

    export default Product;