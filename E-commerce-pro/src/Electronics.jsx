import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Electronics(){
    const devices=useSelector(state=>
        state.products.ElectronicProducts
    )
    const dispatch=useDispatch()
    const items=devices.map(product=>(
        <li key={product.name}> name: {product.name}   price: {product.price}
        <button onClick={()=>dispatch(addToCart(product))}>add to cart</button></li>
    ))
    return(
        <>
        <h1>Electronics page</h1>
        <ol>{items}</ol>
        </>
    )
}
export default Electronics;