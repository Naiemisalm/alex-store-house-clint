import { useEffect, useState } from "react"

const useProduct = () =>{
    const [products, setPoducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setPoducts(data))
    }, [])
    return [products, setPoducts]
}
export default useProduct;