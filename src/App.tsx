import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import bossabox from 'styles/themes/bossabox';

function App() {
  return (
    <ThemeProvider theme={bossabox}>
      <GlobalStyles />
      <div className="App">
        <h1>Vuttr</h1>
        <h3>Very Useful Tools to Remember</h3>
      </div>
    </ThemeProvider>
  );
}

export default App;
