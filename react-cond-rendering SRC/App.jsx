import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'

function App() {
  //array of fruits => fruits.objects
  const fruits = [
    {id: 1, name: "apple", color: "red"}, //apple object
    {id: 2, name: "banana", color: "yellow"}, //banana object 
    {id: 3, name: "orange", color: "orange"}, //orange object
    {id: 4, name: "grape", color: "purple"}, //grape object
    {id: 4, name: "kiwi", color: "green"} //kiwi object
  ]
  const desserts = [
    {id: 1, name: "cake", color: "red"}, //cake object
    {id: 2, name: "ice cream", color: "blue"}, //ice cream object
    {id: 3, name: "croissant", color: "golden brown"} //croissant object
  ]
  return (
    <>
    <Header/>
    {/*{fruits.length > 0 && {ListOfFruits items = {fruits} category = "My Favorite Fruits"}*/}
    {fruits.length > 0 ? (<ListOfFruits items = {fruits} category="My Favorite Fruits"/>) : (<p>No Fruits</p>)}
    {desserts.length > 0 ? (<ListOfFruits items = {desserts} category="My Favorite Desserts"/>) : (<p>I don't like desserts</p>)}
    <Footer/>
    </>
  )
}

export default App