import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    return ( 
        <>
        <nav className='flex-container'>
            <div className="logo ">
                <h1><Link to='/'><span className='logo1'>Movies</span><span className='logo2'>View</span></Link></h1>
            </div>
            <div className="navigation ">
                <span><Link className='link' to='/'>Trending</Link></span>
                <span><Link className='link' to='movies'>Movies</Link></span>
                <span><Link className='link' to='series'>TV Series</Link></span>
                <span><Link className='link' to='search'>Search</Link></span>
            </div>
        </nav>
        </>
     );
}

export default Navbar;