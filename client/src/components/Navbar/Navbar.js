import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<>  
		  <div className="navbar">
			<div><Link className="link" to="/">Shopping</Link></div>
			<div className="">
				<Link className="link" to="/insert">Insert</Link>
				<Link className="link" to="/cart">Cart</Link>
			</div>
		  </div>
		</>
	);
  }
  
export default Navbar;