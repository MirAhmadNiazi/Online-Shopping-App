import { useContext } from 'react'
import { Context } from '../Contexts/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function Basket() {
  const { basketProducts, handleRemoveFromBasket, handleSetWishList, search, handleChange,
    handleOpenItems, handleDecrement, handleIncrement, loggedIn, handleSetSize, handleCheckOut

  } = useContext(Context)


  return (
    <>
      <div className='search'>

        <input className='search-input' type="text" placeholder='Search...' value={search} onChange={handleChange} />

      </div>
      {basketProducts.length ? basketProducts.map((item, index) => (
        <div className='popular' key={index} >
          <h3>{item.title}</h3>

          
            <div className="img-container" onClick={() => handleOpenItems(basketProducts, index)}>  
               <img width="400px" src={item.image[item.count]} alt="" />
            </div>

          <div>
            {/*  <button onClick={() => handleSetWishList(basketProducts, index)}>
              {!item.addedToWishList
                ? <FontAwesomeIcon icon={regularHeart} />
                : <FontAwesomeIcon icon={solidHeart} className='added' />}
            </button> */}

            {/* <button className='remove' onClick={() => handleRemoveFromBasket(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button> */}
          </div>

            <button className='checkout-button' onClick={handleCheckOut}>Proceed to checkout {`(${basketProducts.length})`} {basketProducts.length<1 ? "item" : "items"}</button>
        </div>))

        : (<p>No item is added</p>)}
    </>


  )
}

export default Basket

