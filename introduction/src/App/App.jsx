import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { text: 'Travel arround the globe', done: true },
  { text: 'Travel to the moon', done: false },
  { text: 'Travel to Uruguay', done: true },
  { text: 'Travel to anywhere', done: false },
];

function App() {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My first time with ReactApp!</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        className="wish-clear"
        type="button"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
}

export default App;
