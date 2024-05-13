import { useContext } from 'react'
import { Context } from '../Contexts/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';






function Home() {

  const { handleOpenItems, search, handleChange, popularProducts } = useContext(Context)



  return (

    < >
      <h1>Shop by Store</h1>

      <div className='search'>
        <input className='search-input' type="text" placeholder='Search...' value={search} onChange={handleChange} />
      </div>



      {popularProducts.map((item, index) => (
        <div className='popular' key={index} >
          <h3 >{item.title}</h3>

          {item.image.length > 1
            ?
            <div className="img-container" onClick={() => handleOpenItems(popularProducts, index)}>
              <button className="button-size image-slider-left" onClick={() => handleDecrement(index)}>{"<"}</button>
              <img width="400px" src={item.image[item.count]} alt="" />
              <button className="button-size image-slider-right" onClick={() => handleIncrement(index)}>{">"}</button>
            </div>
            :
            <div className="img-container" onClick={() => handleOpenItems(popularProducts, index)}>
              <img width="400px" src={item.image[item.count]} alt="" />
            </div>
          }
          <div>
            {/*   <button onClick={() => handleSetWishList(popularProducts, index)}>
              {!item.addedToWishList
                ? <FontAwesomeIcon icon={regularHeart} />
                : <FontAwesomeIcon icon={solidHeart} className='added' />}
            </button> */}

            {/* <button onClick={() => loggedIn ? handleSetBasket(popularProducts, index) : alert("Only Members can buy!")}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button> */}
          </div>


        </div>

      ))}
    </>
  )
}

export default Home
