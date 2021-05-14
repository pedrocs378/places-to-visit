
import { Home } from './pages/Home'

import { CountriesProvider } from './contexts/CountriesContext';

import GlobalStyles from './styles/global'

function App() {
  return (
    <CountriesProvider>
      <GlobalStyles />

      <Home />
    </CountriesProvider>
  );
}

export default App;
