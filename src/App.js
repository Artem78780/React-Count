import { useState } from 'react';
import './index.scss';

function App() {
   
const [count, setCount] = useState(0)

  function countPluse() {
    setCount(count + 1)
  }

  function countMinus() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={countMinus}>- Мінус</button>
        <button className="plus" onClick={countPluse}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
