import logo from "./logo.svg";
import "./App.css";
import Topo from "./components/topo/Topo";
import SobreMim from "./components/sobreMim/SobreMim";
import SaibaMais from "./components/saibaMais/SaibaMais";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <>
     <Topo/>
      <div class="corpo">
        <SobreMim/>
        <SaibaMais/>
      </div>
    <Rodape/>
    </>
  );
}

export default App;
