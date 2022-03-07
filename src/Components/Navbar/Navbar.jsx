import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
    return (
        <>
            
            <header>
            <div>
                <Link to="/" ><h1>NETFLIX CLONE</h1></Link>
                <div>
                    <Link to="/">Home Page</Link>
                    <Link to="/addMovie">Favorite Movie</Link>
                    </div>
                </div>
            </header>
        </>

    )
}
export default Navbar;