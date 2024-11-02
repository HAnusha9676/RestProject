import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Fashion(){
    const dresses=useSelector(state=>
        state.products.Fashion
    )
    const dispatch=useDispatch()
    const items=dresses.map(product=>(
        <li key={product.name}>style-{product.name}     cost- {product.price}
    <button onClick={()=>dispatch(addToCart(product))}>addto cart</button>
    </li>))
    return(
        <>
        <h1>Fashion page</h1>
        <ul>{items}</ul>
        </>
    )
}
export default Fashion;