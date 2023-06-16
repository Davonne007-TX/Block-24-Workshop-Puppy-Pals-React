import { useState } from 'react' // React can intelligently reflect the updated data. To use this feature of a React component, you need to use the useState hook.
import {puppyList} from './data.js' //adds /imports puppyList array from data.js

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("PuppyList:", puppyList);

  return (
    <>
      <div className="App">
        { 
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>;
         })
       }
     </div>
    </>
        );//from the return 
}  //last curly for function App()

export default App
