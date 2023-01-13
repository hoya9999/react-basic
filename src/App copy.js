import {useState} from 'react';

function App() {
  const number = 2;
  const [num, setNum] = useState(1);
  const double = (doubleNum) => {
    return doubleNum * 2;
  }
  const printHello = () => {
    console.log(double(2));
  }

  return (
    <>
      <div>{`Number의 2배 : ${double(number)}`}</div>
      <button onClick={printHello}>Hello</button>
      <div>{num}</div>
      <button onClick={setNum({num : num * 2})}>2배씩 증가</button>
    </>
  );
}  

export default App;