import { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReorder = () => setCount(5);

  return (
    <div className='card'>
      <h1>Inventory Count: {count}</h1>
      <button onClick={handleDecrease} disabled={!count}>
        -
      </button>
      <button onClick={handleIncrease}>+</button>
      {count === 0 && <Reorder onReorder={handleReorder} />}
    </div>
  );
};

export default App;
