import React, {Link} from 'react-router-dom';
import Description from './Description';



const FetchApi = () =>{
    const [advices, setadvices] = useState([])
    const getAdvice = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data)
    setadvices(data) 
    }

    useEffect(() => {
        getAdvice()
    }, []); 
    return(<>

    {advices.map((advice, index) => <Link to={{pathname: 'products', product: advices }} key={index}>
        <Description
        image_url={advice.thumbnail}
        description={advice.description}
        />
    </Link>)}
    </>)
}
export default FetchApi;