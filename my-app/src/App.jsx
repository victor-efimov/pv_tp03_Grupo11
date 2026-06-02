import { useRoutes } from "react-router-dom";

import routes from './routes/routes.jsx';
import BarraNavegacion from './components/BarraNavegacion.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const element = useRoutes(routes);

  return (
    <div>
      <BarraNavegacion />
      <Header />
      {element}
      <Footer />
    </div>
  );
}

export default App;