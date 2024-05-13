import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Users from "../components/Users"
import { useNavigate } from "react-router-dom";


export const Context = createContext()

function ContextProvider({ children }) {
  const [formError, setFormError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [allProducts, setAllProducts] = useState([])
  const navigate = useNavigate();






  function handleChange(e) {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const [adidas, setAdidas] = useState([{
    id: 21,
    title: "A SPORTY, COMFORTABLE SHOE MADE WITH RECYCLED MATERIALS.",
    price: "€ 100",
    description: "Just start running. With these adidas running shoes you will be particularly comfortable, no matter how long your day gets. While the light, airy mesh upper keeps your feet pleasantly cool, the Cloudfoam midsole provides optimal cushioning. And the rubber outsole gives you a secure grip on dry and wet surfaces. Have your plans for the day changed again at short notice? No problem, you don't even have to change your shoes. With a recycled content of at least 50% in the upper material, this product is just one of our solutions in the fight against plastic waste.",
    image: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Laufschuh_Schwarz_GW3848_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db5a63951c5a42f2a3eaae88018a08e1_9366/Galaxy_6_Laufschuh_Schwarz_GW3848_02_standard_hover.jpg"
    ],
    size: [39, 41, 41.5, 42, 43, 44],
    addedToWishList: false,
    open: false,
    addedBasket: false,
    category: "men",
    count: 0,
    selectedSize: null,

  },

  {
    id: 22,
    title: "A PLATFORM SHOE FOR VERSATILE STYLING OPTIONS.",
    price: "€ 80",
    description: "Get the most out of yourself with this adidas VL Court Bold shoe. It has a low cut and a high platform sole that gives the whole thing an edgy touch. The leather upper, textile lining and durable rubber outsole combine to provide unbeatable comfort in everyday life.",
    image: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/02145e78a4c64cc7b8b7801373a1b8e8_9366/VL_Court_Bold_Schuh_Blau_IH2310_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/140e7b2cda974842a897cccd5d6b71ad_9366/VL_Court_Bold_Schuh_Blau_IH2310_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d94214890a7b4a01a0c2c968eebf1ec7_9366/VL_Court_Bold_Schuh_Blau_IH2310_03_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/36cf4e1b460345488c5b5ea2f49c6c5a_9366/VL_Court_Bold_Schuh_Blau_IH2310_04_standard.jpg"
    ],
    size: [36, 38, 39],
    addedToWishList: false,
    open: false,
    addedBasket: false,
    category: "women",
    count: 0,
    selectedSize: null,


  }])

  const updatedAdidas = adidas.filter(item => item.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
  const menCategory = updatedAdidas.filter((item) => item.category === "men")
  const womenCategory = updatedAdidas.filter((item) => item.category === "women")
  const childrenCategory = updatedAdidas.filter((item) => item.category === "children")

  function handleIncrement() {
    const item = { ...openedProduct };
    if (item.count < item.image.length - 1)
      item.count++;

    setOpenProducts(item)
  }

  function handleDecrement() {
    const item = { ...openedProduct };
    if (item.count > 0)
      item.count--;

    setOpenProducts(item)
  }


  /* function handleIncrement(data, index) {
    const updatedBrand = [...data];
    if (updatedBrand[index].count < updatedBrand[index].image.length - 1)
      updatedBrand[index].count++;

    if (data === updatedAdidas || data === menCategory || data === womenCategory || data === childrenCategory) {

      setAdidas(updatedBrand)
    } else {
      setProducts(updatedBrand)
    }
  } */

  /*   function handleDecrement(data, index) {
      const updatedBrand = [...data];
      if (updatedBrand[index].count > 0)
        updatedBrand[index].count--;
      if (data === updatedAdidas || data === menCategory || data === womenCategory || data === childrenCategory) {
  
        setAdidas(updatedBrand)
      }
      else {
        setProducts(updatedBrand)
      }
    } */


  function handleSetSize(option) {
    const item = { ...openedProduct };
    item.selectedSize = option;
    setOpenProducts(item)
  }



  /*  function handleSetSize(option, index) {
     const sizeUpdatedAdidas = [...updatedAdidas];
     if (index >= 0 && index < sizeUpdatedAdidas.length) {
       sizeUpdatedAdidas[index].selectedSize = option;
       setAdidas(sizeUpdatedAdidas);
     }
   } */



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (response.ok) {

          return response.json()
        } else {
          throw new Error("data not found")
        }
      })
      .then(data => {

        const modifiedData = data.map(product => ({
          ...product,
          image: product.image.split(','),
          addedToWishList: false,
          open: false,
          addedBasket: false,
          count: 0,
          size: [],
          selectedSize: "3",
        }));
        setProducts(modifiedData);
        setAllProducts([...modifiedData, ...updatedAdidas]);

      })
      .catch(error => {
        alert(error.message)
      });

  }, [])





  const popularProducts = products.filter(item => item.title.toLowerCase().trim().includes(search.toLowerCase().trim()))

  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [basketProducts, setBasketProducts] = useState([])
  const [openedProduct, setOpenProducts] = useState({})


  /*   const favoriteProducts, setFavoriteProducts = allProducts.filter(item => item.addedToWishList)/* 
  /*   const basketProducts = allProducts.filter(item => item.addedBasket)
   */  /* const openedProduct = allProducts.filter(item => item.open)  */





  console.log(popularProducts)


  function handleOpenItems(data, index) {
    const openedItems = [...data];
    /* openedItems[index].open = true;

    const filteredProducts = openedItems.filter(item => item.open)
 */
    setOpenProducts(openedItems[index])

    navigate("/Products");
  }


  function handleSetWishList() {
    const item = structuredClone(openedProduct);
    item.addedToWishList = !item.addedToWishList
    setOpenProducts(item)

    const updatedAllProducts = allProducts.map(product => {
      if (product.id === item.id) {
        product.addedToWishList = !product.addedToWishList
      }
      return product
    })
    setAllProducts(updatedAllProducts)
    if (item.addedToWishList) {
      setFavoriteProducts([...favoriteProducts, item]);
    } else {
      setFavoriteProducts(
        favoriteProducts.filter(product => product.id !== item.id)
      );
    }

    setTimeout(() => {
      item.addedToWishList ? alert("item added to Wish list") : alert("item removed from Wish List")
    }, 500)
  }


  function handleSetBasket() {

    const item = structuredClone(openedProduct);

    if (loggedIn && item.selectedSize) {
      if (!item.addedBasket) {
        item.addedBasket = !item.addedBasket
        setOpenProducts(item)

        const updatedAllProducts = allProducts.map(product => {
          if (product.id === item.id) {
            product.addedBasket = !product.addedBasket
          }
          return product
        })
        setAllProducts(updatedAllProducts)

        if (item.addedBasket) {
          setBasketProducts([...basketProducts, item]);
        } else {
          setBasketProducts(
            basketProducts.filter(product => product.id !== item.id)
          );
        }

        setTimeout(() => {
          alert("Item added to Basket");
        }, 500)

      } else {
        alert("Item already exists");
      }
    } else if (loggedIn && !item.selectedSize) {
      alert("please Select a Size")
    } else {
      alert("login first")
    }

  }
  function handleRemoveFromBasket() {
    const item = structuredClone(openedProduct);


    if (item.addedBasket) {
      item.addedBasket = !item.addedBasket
      item.selectedSize = null;
      setOpenProducts(item)

      const updatedAllProducts = allProducts.map(product => {
        if (product.id === item.id) {
          product.addedBasket = !product.addedBasket
        }
        return product
      })
      setAllProducts(updatedAllProducts)

      if (item.addedBasket) {
        setBasketProducts([...basketProducts, item]);
      } else {
        setBasketProducts(
          basketProducts.filter(product => product.id !== item.id)
        );
      }

      setTimeout(() => {
        alert("Item removed from Basket");
      }, 500)

    }

  }
  function handleCheckOut() {
    setBasketProducts([]);
    navigate("/")
    
    setTimeout(() => {
      alert("Order took place successfully")
    }, 500)
  }



  /*   function handleSetWishList(data, index) {
  
      const selectedItems = [...data];
      selectedItems[index].addedToWishList = !selectedItems[index].addedToWishList;
  
      if (selectedItems[index].addedToWishList) {
        setFavoriteProducts([...favoriteProducts, selectedItems[index]]);
      } else {
        setFavoriteProducts(
          favoriteProducts.filter(item => item.id !== selectedItems[index].id)
        );
      }
     
  
      setTimeout(() => {
        selectedItems[index].addedToWishList ? alert("item added to Wish list") : alert("item removed from Wish List")
      }, 500)
    } */




  /*  function handleButtonClickAddToFavorite(index, e) {
     e.stopPropagation();
     if (loggedIn) {
       handleSetWishList(index);
     } else {
       alert("Only Members can buy!");
     }
   }; */


  /* function handleSetBasket(data, index) {
    const selectedItems = [...data];

    if (!selectedItems[index].addedBasket) {
      selectedItems[index].addedBasket = true;
      setBasketProducts(basketProducts => [...basketProducts, selectedItems[index]]);

       if (data === updatedAdidas || data === menCategory || data === womenCategory || data === childrenCategory) {
         setAdidas(selectedItems)
       } else if (data === popularProducts) {
         setProducts(selectedItems);
       } else {
         setAllProducts(selectedItems)
 
       } 

      setTimeout(() => {
        alert("Item added to Basket");
      }, 500)
    } else {
      alert("Item already exists");
    }
  } */






  /*  function handleButtonClickAddToBasket(index, e) {
     e.stopPropagation();
       handleSetBasket(index);
    
   }; */


  /*   function handleRemoveFromBasket(index) {
      const selectedItems = [...basketProducts];
      selectedItems[index].addedBasket = !selectedItems[index].addedBasket;
      const filteredProducts = selectedItems.filter(item => item.addedBasket)
      setBasketProducts(filteredProducts);
  
      setTimeout(() => {
        alert("Item removed to Basket");
      }, 500)
    } */

  /* function handleButtonClickRemoveFromBasket(index, e) {
    e.stopPropagation();
      handleRemoveFromBasket(index)
  }; */








  return (
    <Context.Provider value={{
      formError, setFormError, Users, loggedIn, setLoggedIn, products,
      setProducts, handleOpenItems, handleChange, popularProducts, basketProducts,
      favoriteProducts, handleSetBasket, handleRemoveFromBasket,
      handleIncrement, handleDecrement, updatedAdidas, handleSetSize, allProducts, menCategory, womenCategory,
      childrenCategory, openedProduct, handleSetWishList, handleCheckOut
    }}

    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
