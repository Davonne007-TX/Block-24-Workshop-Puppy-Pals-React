import { useState } from 'react' // you have to invoke this,you have to use it 
import './App.css'
import {puppyList} from './data.js' //adds /imports puppyList array from data.js

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log([puppies]);

  return (
    <>
      <div>
        <h1>Hi</h1>
      
        
      </div>
      
    </>
  )
}

export default App
