import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Grossaries(){
    const groceriess=useSelector(state=>
        state.products.Groceries
    )
    const dispatch=useDispatch()
    const items=groceriess.map(product=>(
        <li key={product.name}> name:{product.name}  price:{product.price}
        <button onClick={()=>dispatch(addToCart(product))}>add to cart</button>
        </li>
    )
)
    return(
        <>
        <h1>grossaries page</h1>
       <ol>{items}</ol>
        </>
    )
}
export default Grossaries;