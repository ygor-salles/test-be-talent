import { ThemeProvider } from 'styled-components';
import { Employees } from './pages/Employees';
import { GlobalStyle } from './styles/GlobalStyle';
import { THEME } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={{ ...THEME }}>
      <GlobalStyle />
      <Employees />
    </ThemeProvider>
  );
}

export default App;
