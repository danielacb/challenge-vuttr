import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import bossabox from 'styles/themes/bossabox';
import Home from 'pages/Home';

function App() {
  return (
    <ThemeProvider theme={bossabox}>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
