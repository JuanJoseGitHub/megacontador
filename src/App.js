import { useState } from "react";

function App() {

  let [valorActual, setvalorActual] = useState(0);

  function manexadorClickAumentar()  {
    setvalorActual(++valorActual)
  }

  function manexadorClickDisminuir()  {
    setvalorActual(--valorActual)
  }

  function manexadorClickReset()  {
    setvalorActual(0)
  }

  return (
    <>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickAumentar}>+</button>
      <button onClick={manexadorClickDisminuir}>-</button>
      <button onClick={manexadorClickReset}>Reset</button>
    </>   
  );
}

export default App;
