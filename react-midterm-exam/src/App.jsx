import Header from './Header'
import Footer from './Footer'
import Identification from './Identification'
import FavoriteFood from './FavoriteFood'
import Counter from './Counter'
import Function from './Function'
import Paragraph from './Paragraph'
import MyCart from './MyCart'

export default function App() {
  const fruits = [
    { id: 1, name: 'Apple', color: 'Red', rating: 5 },
    { id: 2, name: 'Banana', color: 'Yellow', rating: 4 },
    { id: 3, name: 'Mango', color: 'Orange', rating: 5 },
    { id: 4, name: 'Pineapple', color: 'Yellow', rating: 4 },
    { id: 5, name: 'Grapes', color: 'Purple', rating: 5 }
  ]
  
  const porkDishes = [
    
  ]

  return (
    <>
      <Header />
      <Identification />
      <FavoriteFood item={fruits}/>
      <FavoriteFood item={porkDishes}/>
      <Counter/>
      <Function/>
      <Paragraph/>
      <MyCart />
      <Footer />
    </>
  )
}
