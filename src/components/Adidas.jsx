import { useContext, useState } from "react"
import { Context } from "../Contexts/Contexts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Adidas() {

  const { handleSetWishList, loggedIn, handleOpenItems, search, handleChange,
    handleSetBasket, handleIncrement, handleDecrement, updatedAdidas, handleSetSize, menCategory, womenCategory, childrenCategory } = useContext(Context)

  const [dropDown, setDropDown] = useState(false)
  const [category, setCategory] = useState(null)




  function handleDropDown() {
    setDropDown(!dropDown)
  };

  const handleCategory = (option) => {
    setCategory(option);
    setDropDown(false);
  };




  return (
    <>

      <div className='search'>
        <input className='search-input' type="text" placeholder='Search...' value={search} onChange={handleChange} />

        <button onClick={handleDropDown}> {!dropDown ? "SHOP BY CATEGORY>" : "<BACK"}</button>
        {dropDown && <div className="dropdwon-container">
          <ul className="dropdwon">
            <li onClick={() => handleCategory(null)}>HOME</li>
            <li onClick={() => handleCategory("MEN")}>MEN</li>
            <li onClick={() => handleCategory("WOMEN")} >WOMEN</li>
            <li onClick={() => handleCategory("CHILDREN")}>CHILDREN</li>
          </ul>

        </div>}


        {category && <p> {">>>"} {category}</p>}
      </div>





      {category === "MEN"

        ?

        menCategory.map((item, index) => (
          <div className='popular' key={index} >
            <h3>{item.title}</h3>


            <div className="img-container" onClick={() => handleOpenItems(menCategory, index)}>
              <img width="400px" src={item.image[item.count]} alt="" />
            </div>




            <div>
              {/*  <button onClick={() => handleSetWishList(menCategory, index)}>
                {!item.addedToWishList
                  ? <FontAwesomeIcon icon={regularHeart} />
                  : <FontAwesomeIcon icon={solidHeart} className='added' />}
              </button> */}

              {/*  <button onClick={() => loggedIn ? handleSetBasket(menCategory, index) : alert("Only Members can buy!")}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button> */}
            </div>


            <div className="size">
              <div className="selected-size-container">
                {!item.selectedSize ? <h4>Select Size:</h4> : <h4>Size:</h4>}
                {item.selectedSize && <h4 className="selected-size">{item.selectedSize}</h4>}
              </div>

              <ul className="dropdwon-size">
                {item.size.map((select) => (<li className="size-box" key={select} onClick={() => handleSetSize(select, updatedAdidas.indexOf(item))}>
                  {select}
                </li>))}
              </ul>
            </div>

          </div>

        ))

        :

        category === "WOMEN"

          ?

          womenCategory.map((item, index) => (
            <div className='popular' key={index} >
              <h3>{item.title}</h3>


              <div className="img-container" onClick={() => handleOpenItems(womenCategory, index)}>
                <img width="400px" src={item.image[item.count]} alt="" />
              </div>

              <div>
                {/* <button onClick={() => handleSetWishList(womenCategory, index)}>
                  {!item.addedToWishList
                    ? <FontAwesomeIcon icon={regularHeart} />
                    : <FontAwesomeIcon icon={solidHeart} className='added' />}
                </button> */}

                {/* <button onClick={() => loggedIn ? handleSetBasket(womenCategory, index) : alert("Only Members can buy!")}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button> */}
              </div>

              <div className="size">
                <div className="selected-size-container">
                  {!item.selectedSize ? <h4>Select Size:</h4> : <h4>Size:</h4>}
                  {item.selectedSize && <h4 className="selected-size">{item.selectedSize}</h4>}
                </div>

                <ul className="dropdwon-size">
                  {item.size.map((select) => (<li className="size-box" key={select} onClick={() => handleSetSize(select, updatedAdidas.indexOf(item))}>
                    {select}
                  </li>))}
                </ul>
              </div>
            </div>

          ))

          :

          category === "CHILDREN"

            ?

            childrenCategory.map((item, index) => (
              <div className='popular' key={index} >
                <h3>{item.title}</h3>



                <div className="img-container" onClick={() => handleOpenItems(childrenCategory, index)}>
                  <img width="400px" src={item.image[item.count]} alt="" />
                </div>


                <div>
                  {/*  <button onClick={() => handleSetWishList(childrenCategory, index)}>
                    {!item.addedToWishList
                      ? <FontAwesomeIcon icon={regularHeart} />
                      : <FontAwesomeIcon icon={solidHeart} className='added' />}
                  </button> */}
                  {/* 
                  <button onClick={() => loggedIn ? handleSetBasket(childrenCategory, index) : alert("Only Members can buy!")}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button> */}
                </div>

                <div className="size">
                  <div className="selected-size-container">
                    {!item.selectedSize ? <h4>Select Size:</h4> : <h4>Size:</h4>}
                    {item.selectedSize && <h4 className="selected-size">{item.selectedSize}</h4>}
                  </div>

                  <ul className="dropdwon-size">
                    {item.size.map((select) => (<li className="size-box" key={select} onClick={() => handleSetSize(select, updatedAdidas.indexOf(item))}>
                      {select}
                    </li>))}
                  </ul>
                </div>
              </div>

            ))

            : updatedAdidas.map((item, index) => (
              <div className='popular' key={index} >
                <h3 >{item.title}</h3>

                <div className="img-container" onClick={() => handleOpenItems(updatedAdidas, index)}>
                  <img width="400px" src={item.image[item.count]} alt="" />
                </div>


                <div>

                  {/*  <button onClick={() => handleSetWishList(updatedAdidas, index)}>
                    {!item.addedToWishList
                      ? <FontAwesomeIcon icon={regularHeart} />
                      : <FontAwesomeIcon icon={solidHeart} className='added' />}
                  </button> */}

                  {/* <button onClick={() => loggedIn ? handleSetBasket(updatedAdidas, index) : alert("Only Members can buy!")}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button> */}
                </div>

                {/* <div className="size">
                  <div className="selected-size-container">
                    {!item.selectedSize ? <h4>Select Size:</h4> : <h4>Size:</h4>}
                    {item.selectedSize && <h4 className="selected-size">{item.selectedSize}</h4>}
                  </div>

                  <ul className="dropdwon-size">
                    {item.size.map((select) => (<li className="size-box" key={select} onClick={() => handleSetSize(select, updatedAdidas.indexOf(item))}>
                      {select}
                    </li>))}
                  </ul>
                </div> */}
              </div>

            ))}

    </>


  )
}

export default Adidas


