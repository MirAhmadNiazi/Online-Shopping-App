import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Context } from '../Contexts/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
 




function Layout() {

    const { loggedIn, basketProducts } = useContext(Context)
    return (
        <div>
            
               <ul className='brands'>
               
                <li><NavLink className="nav-brand" to="/Adidas"><img className='nav-img' src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="" /></NavLink></li>
                <li><NavLink className="nav-brand" to="/Clarks"><img className='nav-img' src="https://contents.smsupermalls.com/uploads/tenants/logo/55675b21909c7cf6d01169ec465935cd.png" alt="" /></NavLink></li>
                <li><NavLink className="nav-brand" to="/Ecco"><img className='nav-img' src="https://logowik.com/content/uploads/images/ecco-shoes9112.jpg" alt="" /></NavLink></li>
                <li><NavLink className="nav-brand" to="/Nike"><img className='nav-img' src="https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg" alt="" /></NavLink></li>
                <li><NavLink className="nav-brand" to="/Puma"><img className='nav-img' src="https://w7.pngwing.com/pngs/225/102/png-transparent-puma-adidas-clothing-logo-adidas-logo-sneakers-adidas-thumbnail.png" alt="" /></NavLink></li>
                </ul>
                <main>
                    <Outlet />
                </main>
                <ul className='nav-container'>
                    <li><NavLink className="nav" to="/"><FontAwesomeIcon icon={faHome} /></NavLink></li>
                    <li><NavLink className="nav" to="/WishList"><FontAwesomeIcon icon={faHeart} /></NavLink></li>
                    <li className='basket'><NavLink className="nav nav-basket" to="/Basket"> {basketProducts.length}<FontAwesomeIcon icon={faShoppingCart} /></NavLink> </li>
                    <li><NavLink className="nav" to="/Login"> <FontAwesomeIcon icon={faUser} /></NavLink> </li>

                </ul>
              
             

                
            

    
        </div>
    )
}

export default Layout
