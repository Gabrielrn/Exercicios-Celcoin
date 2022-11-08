import { useEffect } from "react";

function App() {

  const [text, setText] = useEffect();

  return (
    <div className="App">
      <textarea placeholder="Digite aí" rows={15} onChage={((e) => setText(e.target.value))}></textarea>
      <div className="mirror">
        <h1>Código</h1>
          {text.toUpperCase()}
      </div>
    </div >
  );
}

export default App;
