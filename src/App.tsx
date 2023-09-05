import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import './App.css'
import Cart from './Components/Cart';
import About from './Components/About';
import Products from './Components/Products';

type Rating = {
  count: number,
  rate: number
}

type Product = {
  id: number,
  title: string,
  category: string,
  description: string,
  image: string,
  price: number,
  quantity?: number,
  rating: Rating
}

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [list, setList] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [end, setEnd] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch('../../json.test.json')
      const products = await request.json()

      setList(products)
    }
    getProducts()
  }, [])

  useEffect(() => {
    calculateTotal()
  }, [cartItems])

  const calculateTotal = () => {
    const sum: number = cartItems.reduce((a, item) => {
      return a + item.price * (item.quantity || 1)
    }, 0)
    setTotal(sum)
  }

  const addToCart = (idToAdd: number, quantity: number) => {
    // product, exists?
    const productToAdd: Product | undefined = list.find(prod => prod.id === idToAdd)
    // product in cart?
    const inCart: boolean = cartItems.some(prod => prod.id === idToAdd)


    if (productToAdd) {
      if (inCart) {
        const addQuanta = cartItems.find(prod => prod.id === idToAdd)
        addQuanta.quantity += quantity
        calculateTotal()
        console.log(cartItems);
      } else {
        setCartItems((oldCart) => [...oldCart, { ...productToAdd, quantity }])
        calculateTotal()
        console.log(cartItems);
      }
    }
  }

  const deleteFromCart = (idToDelete: number) => {
    const toBeDeleted: number = cartItems.findIndex(item => item.id === idToDelete)
    const newArray: Product[] = [...cartItems.splice(0, toBeDeleted), ...cartItems.splice(toBeDeleted + 1)]
    setCartItems(newArray)
    calculateTotal()
  }

  const pay =()=>{
    setCartItems([])
    setTotal(0)
    setEnd(true)
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<Products setFunction={addToCart} list={list} />} />
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart itemsInCart={cartItems} total={total} deleteFunction={deleteFromCart} clear={pay} done={end}/>} />
      </Routes>
    </Router>
  )
}

export default App
