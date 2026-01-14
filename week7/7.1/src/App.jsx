import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count}/>
      <Button count={count} setCount={setCount}/>
    </>
  );
}

function Counter({count}) {
    return <div>
        Count is {count}
    </div>
}

function Button({count, setCount}) {
    return <div>
        <button onClick={() => {
            setCount(count+1)
        }}>
            Increase
        </button>
        <button onClick={() => {
            setCount(count-1)
        }}>
            Decrease
        </button>
    </div>
}

export default App