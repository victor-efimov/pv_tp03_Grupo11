import { useRoutes } from "react-router-dom";

import routes from './routes/routes.jsx';
import { UsuarioProvider } from './context/UsuarioContext.jsx';
import BarraNavegacion from './components/BarraNavegacion.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const element = useRoutes(routes);

  return (
    <UsuarioProvider>
    <div>
      <BarraNavegacion />
      <Header />
      {element}
      <Footer />
    </div>
    </UsuarioProvider>
  );
}

export default App;