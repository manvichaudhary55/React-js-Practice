
import Card from './Card'
import './App.css'

function App() {
  // Passing Objects 
  let newObj={
    name:"Priya",
    Number:22
  }
  // Passing Arrays
  let newArr =[1,2,3]

  return (
    <>
      <Card username="Manvi" btnVal="View profile"/>
      <Card username="Naina " btnVal="Open profile" obj={newObj} arr ={newArr}/>
      {/* All these comes in the form of object key and values */}
    </>
  )
}

export default App
