import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useStatefrom} from 'react';
import { db} from "./firebase";
import { collection, getDoc, setDoc, doc, onSnapshot} from "firebase/firestore";
import { merge } from 'openai/internal/qs/utils.mjs';


function App() {
const [pineappleVotes, setPineappleVotes] = useState(0);
const [noPineappleVotes, setNoPineappleVotes] = useState (0);

const votesRef = doc(db, "votes", "pizzaVote");

useEffect(() => {
  const unsubscribe = onSnapshot(doc(db, "votes","pizzaVote"), (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setPineappleVotes(data.pineapple || 0);
      setNoPineappleVotes(data.noPineapple || 0);
    }
  });
  return () => unsubscribe();
}, []);

const voteForPineapple = async () => {
  const newVotes = pineappleVotes + 1;
  setPineappleVotes(newVotes);
  await setDoc(doc(db, "votes", "pizzaVote"), { 
      pineapple: newVotes, 
      noPineapple: noPineappleVotes 
  }, { merge: true });
};

const voteForNoPineapple = async () => {
  const newVotes = noPineappleVotes + 1;
  setNoPineappleVotes(newVotes);
  await setDoc(doc(db, "votes", "pizzaVote"), { 
      pineapple: pineappleVotes, 
      noPineapple: newVotes 
  }, { merge: true });
};


return (
    <div>
      <div className='header'>
      <h1>PIZZA VOTE 🍕</h1> 
      <p>Should pineapple be on pizza? Use your right to vote to decide</p>
      </div>
      <div className="pizza-container">
       
        <div className="half left" onClick={voteForPineapple}></div>
        <div className="half right" onClick={voteForNoPineapple}></div>
        <img src="/pizza.png" alt="Pizza" className='pizza-image'/>
    </div>
    <div className="results">
     <div className='lefty'> 🍍 Pineapple: {pineappleVotes} votes</div>
     <div className='righty'>❌ No Pineapple: {noPineappleVotes} votes</div>
    </div>
    </div>
  );
}

export default App;
