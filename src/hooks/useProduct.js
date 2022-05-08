import { useEffect, useState } from "react"

const useProduct = () =>{
    const [products, setPoducts] = useState([]);

    useEffect(() => {
        fetch('https://serene-harbor-08574.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setPoducts(data))
    }, [])
    return [products, setPoducts]
}
export default useProduct;