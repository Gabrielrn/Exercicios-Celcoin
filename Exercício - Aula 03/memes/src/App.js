import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Content />
      <Footer nome='High five, Hyperlink!'/>
      <Footer nome='Sorry, bro.'/>
    </div>
  );
}

export default App;
