import { useContext } from 'react'
import { Context } from '../Contexts/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function WishList() {
  const { favoriteProducts, handleSetWishList, loggedIn, search, handleChange, handleSetBasket, handleOpenItems, handleDecrement, handleIncrement } = useContext(Context)


  return (
    <>
      <div className='search'>

        <input className='search-input' type="text" placeholder='Search...' value={search} onChange={handleChange} />

      </div>

      {favoriteProducts.length ? favoriteProducts.map((item, index) => (
        <div className='popular' key={index} >
          <h3 >{item.title}</h3>

          {item.image.length > 1
            ?
            <div className="img-container" onClick={() => handleOpenItems(favoriteProducts, index)}>
              <button className="button-size image-slider-left" onClick={() => handleDecrement(favoriteProducts, index)}>{"<"}</button>
              <img width="400px" src={item.image[item.count]} alt="" />
              <button className="button-size image-slider-right" onClick={() => handleIncrement(favoriteProducts, index)}>{">"}</button>
            </div>
            :

            <div className="img-container" onClick={() => handleOpenItems(favoriteProducts, index)}>
              <img width="400px" src={item.image[item.count]} alt="" />
            </div>


          }

          <div>
            {/* <button onClick={() => handleSetWishList(favoriteProducts, index)}>
              {!item.addedToWishList
                ? <FontAwesomeIcon icon={regularHeart} />
                : <FontAwesomeIcon icon={solidHeart} className='added' />}
            </button> */}

            {/* <button onClick={() => loggedIn ? handleSetBasket(favoriteProducts , index) : alert("Only Members can buy!")}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button> */}
          </div>


        </div>))

        : (<p>No item is added</p>)}
    </>


  )
}

export default WishList
