import { useState } from 'react'; // React can intelligently reflect the updated data. To use this feature of a React component, you need to use the useState hook.
import './App.css';
import './index.css';
import {puppyList} from './data.js'; //adds /imports puppyList array from data.js


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("PuppyList:", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup); 

  return (
    <>
      <div className="App">
        <h1>Block 24 Workshop: Puppy Pals</h1>
        { 
          puppies.map((puppy)=> {
            return <p onClick = {()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
         })
       }
       {featPupId && <p> {featPupId}</p> }
     </div>

     {featPupId && (
       <div>
        <h2>{featuredPup.name}</h2>
          <ul>
            <li><em>Age:</em> {featuredPup.age}</li>
            <li><em>Email:</em> {featuredPup.email}</li>
         </ul>
       </div>
     )} 
    </>
        );//from the return 
 }  //last curly for function App()

export default App



