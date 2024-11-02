import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItems } from "./store";
import { useState } from "react";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();       

    const listItems = cart.length > 0 ? (
        cart.map(item => (
            <li key={item.name}>
                Name: {item.name} | Price: {item.price * item.quantity} | Quantity: {item.quantity}
                <button onClick={() => dispatch(increment({ name: item.name }))}>+1</button>
                <button onClick={() => dispatch(decrement({ name: item.name }))}>-1</button>
                <button onClick={() => dispatch(removeItems({ name: item.name }))}>Remove</button>
            </li>
        ))
    ) : (
        "cart is empty"
    );

    // Discount
    const [disperce, setDisPerc] = useState(0);
    
    const handleDisPercentage = (dvalue) => {
        setDisPerc(dvalue / 100); // Store as a fraction for calculations
    };

    // Apply coupon
    const [couponCode, setCouponCode] = useState('');
    const [coupondiscPercentage, setCoupondiscPercentage] = useState(0);
    
    const handleApplyCoupon = () => {
        switch (couponCode) {
            case "anii10":
                setCoupondiscPercentage(10);
                break;
            case "anii20":
                setCoupondiscPercentage(20);
                break;
            case "aniii30":
                setCoupondiscPercentage(30);
                break;
            default:
                alert('Invalid coupon');
                setCoupondiscPercentage(0);
        }
    };

    const calculateTotal = () => {
        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const disAmount = total * disperce;
        const couponAmount = total * (coupondiscPercentage / 100);
        const netAmount = total - disAmount - couponAmount;

        return {
            total,
            disAmount,
            couponAmount,
            netAmount
        };
    };

    const { total, disAmount, couponAmount, netAmount } = calculateTotal();

    return (
        <>
            <h2>This is a cart page</h2>
            <ol>{listItems}</ol>
            <h3>Total Price: {total.toFixed(2)}</h3>
            <button onClick={() => handleDisPercentage(10)}>Apply 10%</button>
            <button onClick={() => handleDisPercentage(20)}>Apply 20%</button>
            <button onClick={() => handleDisPercentage(30)}>Apply 30%</button>
            <h2>Discount Percentage: {disperce * 100}%</h2>
            <h2>Discount Amount: ${disAmount.toFixed(2)}</h2>
            <h2>Apply Coupon</h2>
            <input 
                type="text" 
                value={couponCode} 
                onChange={(e) => setCouponCode(e.target.value)} 
                placeholder="Enter coupon code" 
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>
            <h2>Coupon Amount: ${couponAmount.toFixed(2)}</h2>
            <h2>Net Amount: ${netAmount.toFixed(2)}</h2>
        </>
    );
}

export default Cart;
