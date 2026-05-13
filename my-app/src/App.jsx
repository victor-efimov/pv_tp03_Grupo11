import Listaproyectos from './components/Listaproyectos.jsx'
import BarraNavegacion from './components/BarraNavegacion.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
  <div>
    <BarraNavegacion />
    <Header />
    <Listaproyectos />
    <Footer />
  </div>
  );
}

export default App;
