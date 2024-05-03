import React,{useEffect, useState} from "react";
import axios from "axios";
import SEO from '../theme/SEO'
import { json } from "react-router-dom";

const About = () =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/search?q=phone')
                setData(response.data)
                setIsLoading(false)
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
    } , [])

console.log(data);
if (isLoading) {
    return <div>Loading...</div>
}
if (error) {
    return <div>Error: {error.message} </div>
}

    return (
        <div>
            <h1>About me</h1>
                {data.products.map(item => {
                    console.log(item);
                    return <div className="product" key={item.id}>
                        {item.title}
                        <br />
                        <img src={item.thumbnail} alt={item.title} className="img-fluid"></img>
                        <br />
                        {item.price}
                        </div>
                })
            }
        </div>
    )
}


export default About