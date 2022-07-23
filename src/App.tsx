import Header from "./components/header";
import MainContent from "./components/mainContent";
import { ContextProvider } from "./context/appContext";
import GlobalStyle from "./styles/GloblalStyles";

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Header />
      <MainContent />
    </ContextProvider>
  );
}

export default App;
