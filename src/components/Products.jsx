import { useContext, useEffect, useState } from 'react'
import { Context } from '../Contexts/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function Products() {

  const { handleSetBasket, handleRemoveFromBasket, openedProduct, handleSetWishList, handleDecrement, handleIncrement, handleSetSize } = useContext(Context)


  return (

    <div className='popular'  >
      <h3>{openedProduct.title}</h3>

      {openedProduct.image.length > 1
        ?
        <div className="img-container">
          <button className="button-size image-slider-left" onClick={handleDecrement}>{"<"}</button>
          <img width="400px" src={openedProduct.image[openedProduct.count]} alt="" />
          <button className="button-size image-slider-right" onClick={handleIncrement}>{">"}</button>
        </div>
        :
        <img width="400px" src={openedProduct.image[openedProduct.count]} alt="" />}
      <div>
        {<button onClick={handleSetWishList}>
          {!openedProduct.addedToWishList
            ? <FontAwesomeIcon icon={regularHeart} />
            : <FontAwesomeIcon icon={solidHeart} className='added' />}
        </button>}
        {!openedProduct.addedBasket
          ?
          <button onClick={handleSetBasket}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          :
          <button className='remove' onClick={handleRemoveFromBasket}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>}

          <div className="size">
                  <div className="selected-size-container">
                    {!openedProduct.selectedSize ? <h4>Select Size:</h4> : <h4>Size:</h4>}
                    {openedProduct.selectedSize && <h4 className="selected-size">{openedProduct.selectedSize}</h4>}
                  </div>

                  <ul className="dropdwon-size">
                    {openedProduct.size.map((select) => (<li className="size-box" key={select} onClick={() => handleSetSize(select)}>
                      {select}
                    </li>))}
                  </ul>
                </div>

      </div>


    </div>

  )
}

export default Products
