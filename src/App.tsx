import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import { THEME } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={{ ...THEME }}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
