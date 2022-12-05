    import React, {useState, useEffect} from 'react';
    import { Link } from 'react-router-dom';
    import Spinners from "./Spinners"
    const Description = () =>{
        const [loading, setloading] = useState();
        const [advices, setadvices] = useState([])
        const getAdvice = async() => {
        setloading(true)
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data)
        setadvices(data) 
        setloading(loading)
        }

        useEffect(() => {
            getAdvice()
        }, []);

    return(
        <>
            
            <div className='main__container grid grid-cols-5 gap-3'>
                {loading ? (<Spinners/>) : (advices.products?.map((user, index) => 
                <Link to={{pathname: 'products', product: advices }} key={index}>
                    <div className="product__card bg-slate-700 my-5 text-white">
                    <div className="img"><img src={user.thumbnail} alt="" /></div>
                    <p className='p-5'> {user.description} </p>
                    </div>
                </Link>))}
            </div>
        </>
    ) 
    }

    export default Description;