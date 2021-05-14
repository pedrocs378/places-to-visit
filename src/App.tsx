
import { Home } from './pages/Home'

import { CountriesProvider } from './contexts/CountriesContext';
import { PlacesProvider } from './contexts/PlacesContext';

import GlobalStyles from './styles/global'

function App() {
  return (
    <CountriesProvider>
      <PlacesProvider>
        <GlobalStyles />

        <Home />
      </PlacesProvider>
    </CountriesProvider>
  );
}

export default App;
