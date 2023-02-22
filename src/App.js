import { useState } from "react";

function App() {

  let [valorActual, setvalorActual] = useState(0);

  function manexadorClickAumentar()  {
    setvalorActual(++valorActual)
  }

  function manexadorClickDisminuir()  {
    setvalorActual(--valorActual)
  }

  return (
    <>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickAumentar}>+</button>
      <button onClick={manexadorClickDisminuir}>-</button>
    </>   
  );
}

export default App;
