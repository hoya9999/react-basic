import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const double = () => {
    setNumber((prevState) => {
      return prevState * 2
    });
    setNumber((prevState) => {
      return prevState * 2
    });
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={double}
      >2배씩 증가</button>
    </>
  );
}  

export default App;