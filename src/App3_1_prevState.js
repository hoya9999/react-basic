import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(1);

  const double = () => {
    setNumber(prevState => prevState * 2);
    setNumber(prevState => prevState * 2);
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={double}
      >4배씩 증가</button>
    </>
  );
}  

export default App;