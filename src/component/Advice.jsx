import { data } from 'autoprefixer';
import React, {useState, useEffect} from 'react';

const Advice = () =>{
    const [advices, setadvices] = useState([])

    const getAdvice = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data)
    setadvices(data) 
    }
    // console.log(data)

    useEffect(() => {
        getAdvice()
    }, []);

    // console.log(advices) 
    return(
        <>
        
        <div className='main__container grid grid-cols-4 gap-3'>
            {advices.products?.map(user => (
                <div className="product__card bg-slate-700 mt-5 text-white">
                    <div className="img"><img src={user.thumbnail} alt="" /></div>
                   <ul className='p-5'>
                    <li> {user.description} </li>
                   </ul>
                </div>
            ))}
        </div>
        </>
    ) 
}

export default Advice;