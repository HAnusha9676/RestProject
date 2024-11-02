
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Grossaries from "./Grossaries";
import Home from "./Home";
import Mobiles from "./Mobiles";
import './App.css'
import { useSelector } from "react-redux";
import Cart from "./Cart";

function App(){

  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  return(
    <>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/fashion">Fashion</Link>
    <Link to="/electronics">Electronics</Link>
    <Link to="/mobiles">Mobiles</Link>
    <Link to="/grossaries">Groceries</Link>
    <Link to="/cart">Cart({totalItems})</Link>
    <Link to="/aboutus">AboutUs</Link>
    <Link to="/contactus">ContactUs</Link>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/grossaries" element={<Grossaries />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;